import { useState } from "react";
import { useForm } from "react-hook-form";
import md5 from "md5";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authService, dbService } from "../../firebase";
import { ref, set } from "firebase/database";

function RegisterPage() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // 회원가입
      let createdUser = await createUserWithEmailAndPassword(
        authService,
        data.email,
        data.password
      );

      // 유저 정보 수정
      await updateProfile(authService.currentUser, {
        displayName: data.nickname,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });
      console.log(createdUser);

      //db에 저장
      set(ref(dbService, `users/${createdUser.user.uid}`), {
        nickname: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>회원가입</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일 입력은 필수입니다.</p>}
        <label>닉네임</label>
        <input {...register("nickname", { required: true, maxLength: 10 })} />
        {errors.nickname && errors.nickname.type === "required" && (
          <p>닉네임 입력은 필수입니다.</p>
        )}
        {errors.nickname && errors.nickname.type === "maxLength" && (
          <p>닉네임 크기는 10자 미만입니다.</p>
        )}
        <label>비밀번호</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호는 필수입니다.</p>
        )}

        {errors.password && errors.password.type === "minLength" && (
          <p>비밀번호는 6자 이상이어야 합니다.</p>
        )}
        <label>비밀번호 재입력</label>
        <input
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === "required" && (
            <p>비밀번호 재입력은 필수입니다.</p>
          )}

        {errors.password_confirm &&
          errors.password_confirm.type === "validate" && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />
        <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
