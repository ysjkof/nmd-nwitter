import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";
import { dbService } from "../fbase";

const Wrapper = styled.div`
  height: 100%;
`;
const OutWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid;
  padding: 10px;
  border-radius: 8px;
  height: 70vh;
  width: 100%;
  overflow-y: auto;
  &:first-child {
    margin-top: auto;
  }
`;

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = query(collection(dbService, "nweets"), orderBy("createdAt"));
    onSnapshot(q, (QuerySnapshot) => {
      const newArray = QuerySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setNweets(newArray);
    });
    // return () => {
    //   unsubscribe();
    // };
  }, []);
  useEffect(function moveScrollBottom() {
    const outWindow = document.getElementById("OutWindow");
    const newScrollTop = outWindow.scrollTopMax;
    outWindow.scrollTop = newScrollTop;
  });

  const onScroll = (event) => {
    // const outWindow = document.getElementById("OutWindow");
    // const scrollBottom = outWindow.scrollTopMax;
    // const {
    //   target: { scrollTop, scrollTopMax },
    // } = event;
  };

  return (
    <Wrapper>
      <OutWindow onScroll={onScroll} id="OutWindow">
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
