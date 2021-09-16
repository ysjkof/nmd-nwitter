import { deleteDoc, doc, getFirestore, updateDoc } from "@firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { storageService } from "../fbase";
import { transCreatedAt } from "./sharedFn";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 4px 8px;
  :hover {
    background-color: rgb(255, 191, 191);
  }
  :not(:last-child) {
    margin-bottom: 14px;
  }
  box-shadow: ${(props) => (props.isOwner ? "0 0 3px 1px" : "0 0 1px")};
`;

const NweetContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const NweetRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #34495e;
  a img {
    border-radius: 8px;
    margin-top: 4px;
    max-width: 100%;
  }
  :first-child {
    font-size: 14px;
    color: #7f8c8d;
  }
  h6 {
    word-break: break-all;
  }
`;
const BtnWrapper = styled.div`
  span {
    cursor: pointer;
  }
  span :hover {
    scale: 1.3;
  }
  span:last-child {
    margin-left: 18px;
  }
`;
const BtnDateColumn = styled.div`
  display: flex;
  h5 {
    margin-left: 10px;
  }
`;

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await deleteDoc(doc(getFirestore(), `nweets/${nweetObj.id}`));
      if (nweetObj.attachmentUrl) {
        await deleteObject(ref(storageService, nweetObj.attachmentUrl));
      }
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(getFirestore(), `nweets/${nweetObj.id}`), {
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <Wrapper isOwner={isOwner}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="NWEET" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <NweetContainer>
            <NweetRow>
              <h4>{nweetObj.displayName}</h4>
              <BtnDateColumn>
                {isOwner && (
                  <BtnWrapper>
                    <span onClick={onDeleteClick}>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span onClick={toggleEditing}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                  </BtnWrapper>
                )}
                <h5>{transCreatedAt(nweetObj.createdAt)}</h5>
              </BtnDateColumn>
            </NweetRow>
            <NweetRow>
              <h6>{nweetObj.text}</h6>
            </NweetRow>
            {nweetObj.attachmentUrl && (
              <NweetRow>
                <a href={nweetObj.attachmentUrl}>
                  <img
                    id={nweetObj.attachmentUrl}
                    alt=""
                    src={nweetObj.attachmentUrl}
                  />
                </a>
              </NweetRow>
            )}
          </NweetContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Nweet;
