import { IoIosChatboxes } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { authService, storageService, dbService } from "../../../firebase";
import { useRef } from "react";
import {
  uploadBytesResumable,
  ref as strRef,
  getDownloadURL,
} from "firebase/storage";
import { ref, update } from "firebase/database";
import { updateProfile } from "firebase/auth";
import { setPhotoURL } from "../../../redux/actions/user_action";
function UserPanel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const HandleLogOut = () => {
    authService.signOut();
  };
  const inputOpenImageRef = useRef();

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };
  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const user = authService.currentUser;

    const metadata = { contentType: file.type };
    try {
      //storage 업로드
      let uploadTask = uploadBytesResumable(
        strRef(storageService, `user_image/${user.uid}`),
        file,
        metadata
      );

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // 프로필 이미지 수정
        updateProfile(user, {
          photoURL: downloadURL,
        });
        dispatch(setPhotoURL(downloadURL));
        // DB 유저 이미지 수정
        update(ref(dbService, `users/${user.uid}`), { image: downloadURL });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3 style={{ color: "white" }}>
        <IoIosChatboxes /> 채팅앱
      </h3>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Image
          src={user && user.photoURL}
          style={{ width: "30p", height: "30px", marginTop: "3px" }}
          roundedCircle
        />

        <Dropdown>
          <Dropdown.Toggle
            style={{ background: "transparent", border: "0px" }}
            id="dropdown-basic"
          >
            {user && user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpenImageRef}>
              프로필 사진 변경
            </Dropdown.Item>
            <Dropdown.Item onClick={HandleLogOut}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        ref={inputOpenImageRef}
        accept="image/jpeg, image/png"
        onChange={handleUploadImage}
      />
    </div>
  );
}

export default UserPanel;
