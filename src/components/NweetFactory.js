import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
const NweetFactory = (props) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = ref(storageService, `${props.userObj.uid}/${uuidv4()}`);
      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }
    const nweetPosting = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: props.userObj.uid,
      attachmentUrl,
    };
    try {
      const docRef = await addDoc(
        collection(dbService, "nweets"),
        nweetPosting
      );
      setNweet("");
      setAttachment("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const onChagne = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChagne}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nweet" />
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};
export default NweetFactory;
