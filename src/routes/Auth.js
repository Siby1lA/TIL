import { authService } from "fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthForm from "components/AuthForm";
const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    if (name === "google") {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(authService, provider);
      //const credential = GoogleAuthProvider.credentialFromResult(result);
    }
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default Auth;
