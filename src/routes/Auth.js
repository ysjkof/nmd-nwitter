import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import AuthForm from "../components/AuthForm";
import { authService } from "../fbase";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    try {
      // 구글과 깃허브 email Id가 동일하다면 오류난다.
      // Error (auth/account-exists-with-different-credential).
      if (name === "google") {
        provider = new GoogleAuthProvider();
        const result = await signInWithPopup(authService, provider);
        GoogleAuthProvider.credentialFromResult(result);
      } else if (name === "github") {
        provider = new GithubAuthProvider();
        const result = await signInWithPopup(authService, provider);
        GithubAuthProvider.credentialFromResult(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Auth;
