import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import AuthForm from "../components/AuthForm";
import { authService } from "../fbase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AnotherAuthForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  button {
    width: 40%;
  }
`;

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
    <Container>
      <AuthForm />
      <AnotherAuthForm>
        <button name="google" onClick={onSocialClick}>
          Sign In with Google
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" onClick={onSocialClick}>
          Sign In GitHub
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </AnotherAuthForm>
    </Container>
  );
};

export default Auth;
