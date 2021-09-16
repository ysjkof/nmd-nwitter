import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";
import { dbService } from "../fbase";

const Wrapper = styled.div`
  height: 100%;
  max-width: 640px;
  margin: auto;
`;
const OutWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid;
  padding: 10px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  &:first-child {
    margin-top: auto;
  }
  padding-bottom: 80px;
`;

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (QuerySnapshot) => {
      const newArray = QuerySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setNweets(newArray);
    });
  }, []);
  // useEffect(function moveScrollBottom() {
  //   const outWindow = document.getElementById("OutWindow");
  //   const newScrollTop = outWindow.scrollTopMax;
  //   outWindow.scrollTop = newScrollTop;
  // });

  return (
    <Wrapper>
      <OutWindow id="OutWindow">
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </OutWindow>
      <NweetFactory userObj={userObj} />
    </Wrapper>
  );
};

export default Home;
