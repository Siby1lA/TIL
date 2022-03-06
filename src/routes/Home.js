import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
const Home = (props) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  return (
    <div>
      <NweetFactory userObj={props.userObj} />
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === props.userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
