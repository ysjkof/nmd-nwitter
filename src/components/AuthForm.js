import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { authService } from "../fbase";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px 14px;
  }
  input:not(:last-child) {
    margin-bottom: 14px;
  }
  input:last-child {
    margin-bottom: 8px;
    box-shadow: none;
    cursor: pointer;
  }
`;
const Button = styled.button`
  background: none;
  cursor: pointer;
  color: #d35400;
  box-shadow: none;
`;
const Error = styled.span`
  color: red;
  margin-bottom: 12px;
`;

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [errorState, setErrorState] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setErrorState(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <Error>{errorState}</Error>
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </Form>
      <Button onClick={toggleAccount}>
        {newAccount ? "Change to Sign In" : "Create Account"}
      </Button>
    </>
  );
};

export default AuthForm;
