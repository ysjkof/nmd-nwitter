import { deleteDoc, doc, getFirestore, updateDoc } from "@firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { storageService } from "../fbase";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 4px 8px;
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
  color: #34495e;
  img {
    max-width: 30%;
  }
  :first-child {
    font-size: 14px;
    color: #7f8c8d;
  }
`;
const BtnWrapper = styled.div`
  span:last-child {
    margin-left: 25px;
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
  console.log(isOwner);

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
              <h6>{nweetObj.displayName}</h6>
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
            </NweetRow>
            <NweetRow>
              <h4>{nweetObj.text}</h4>
              {nweetObj.attachmentUrl && (
                <img alt="" src={nweetObj.attachmentUrl} />
              )}
            </NweetRow>
          </NweetContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Nweet;
