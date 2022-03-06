import { authService, dbService } from "fbase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import React, { useEffect, useState } from "react";
const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayname] = useState(userObj.displayName);
  const onLogoutClick = () => {
    authService.signOut();
  };
  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  useEffect(() => {
    getMyNweets();
  }, []);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayname(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={newDisplayName}
          onChange={onChange}
          type="text"
          placeholder="Display name"
        />
        <input type="submit" value="Update profile" />
      </form>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};
export default Profile;
