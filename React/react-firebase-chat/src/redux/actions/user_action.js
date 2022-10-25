import { SET_URSER_POSTS, CLEAR_USER, SET_USER, SET_PHOTO_URL } from "./types";
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
export function setPhotoURL(photoURL) {
  return {
    type: SET_PHOTO_URL,
    payload: photoURL,
  };
}
export function setUserPosts(message) {
  return {
    type: SET_URSER_POSTS,
    payload: message,
  };
}
