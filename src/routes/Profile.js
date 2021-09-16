import { updateProfile } from "@firebase/auth";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Nweet from "../components/Nweet";
import { dbService } from "../fbase";

const Container = styled.div`
  height: 100%;
  max-width: 640px;
  min-height: 50vh;
  /* border: 1px solid; */
  border-radius: 8px;
  padding: 5px 5px 20px 5px;
  margin: auto;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    div {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      width: 100%;
      input:first-child {
        width: 50%;
      }
      input:last-child {
        width: 30%;
      }
    }
    label {
      margin-right: 10px;
      background-color: white;
      border-radius: 8px;
      padding: 3px 8px;
    }
    input:not(:last-child) {
      border: none;
      box-shadow: 0 0 4px;
      padding: 0 7px;
    }
  }
`;
const MyNweet = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    margin-bottom: 18px;
    background-color: white;
    border-radius: 8px;
    padding: 6px;
  }
`;

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [myNweets, setMyNweets] = useState();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
    }
    refreshUser();
  };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );

    const querySnapshot = await getDocs(q);
    let newArray = [];
    querySnapshot.forEach((doc) => {
      return newArray.push(doc.data());
    });
    setMyNweets(newArray);
  };
  useEffect(() => {
    getMyNweets();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <label>Nickname</label>
        <div>
          <input
            onChange={onChange}
            type="text"
            placeholder="Nickname"
            value={newDisplayName}
          />
          <input type="submit" value="Update Profile" />
        </div>
      </form>
      <MyNweet>
        <h3>My Nweets</h3>
        {myNweets?.map((nweet) => (
          <Nweet
            key={nweet.createdAt}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </MyNweet>
    </Container>
  );
};

export default Profile;
