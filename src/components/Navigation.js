import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import { authService } from "../fbase";

const Nav = styled.nav`
  display: flex;
  background-color: white;
  margin: 10px auto;
  width: 100%;
  max-width: 640px;
  border-radius: 8px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  a,
  button {
    border: 1px solid;
    border-radius: 8px;
    padding: 4px 8px;
  }
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  :last-child {
    & :last-child {
      margin-left: 12px;
    }
  }
`;

const Navigation = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/profile">
            {userObj?.displayName
              ? `${userObj.displayName}'s Profile`
              : "My Profile"}
          </Link>
        </Li>
        <Li>
          <Link to="/">Home</Link>
          <button onClick={onLogOutClick}>Log out</button>
        </Li>
      </Ul>
    </Nav>
  );
};
export default Navigation;
