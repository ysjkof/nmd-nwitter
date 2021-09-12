import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">
          {userObj?.displayName
            ? `${userObj.displayName}'s Profile`
            : "My Profile"}
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
