import { useHistory } from "react-router";
import { authService } from "../fbase";

const Profile = () => {
  const history = useHistory();
  const LogOut = () => {
    authService.signOut();
    history.push("/");
  };
  return <button onClick={LogOut}>Log out</button>;
};

export default Profile;
