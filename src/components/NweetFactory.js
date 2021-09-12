import { addDoc, collection } from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { v4 } from "uuid";
import { dbService, storageService } from "../fbase";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-bottom: 5px;
    padding: 0 10px;
    :first-child {
      width: 100%;
      padding: 10px;
    }
  }
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    span {
      margin-right: 10px;
    }
  }
`;
const PreviewAttachment = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  box-shadow: 0 0 10px;
  img {
    max-width: 350px;
    max-height: 350px;
    width: fit-content;
    height: fit-content;
  }
  span {
    position: absolute;
    background-color: white;
    border-radius: 8px;
    padding: 2px;
    font-size: 12px;
    top: 10px;
    left: 10px;
    border: 1px solid red;
    color: red;
  }
  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    color: red;
    font-weight: 600;
    border: 1px solid red;
  }
`;

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let attachmentUrl = "";
      if (attachment !== "") {
        const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
        const response = await uploadString(
          attachmentRef,
          attachment,
          "data_url"
        );
        attachmentUrl = await getDownloadURL(response.ref);
      }
      const nweetObj = {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl,
        displayName: userObj.displayName,
      };
      await addDoc(collection(dbService, "nweets"), nweetObj);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);

  return (
    <Form onSubmit={onSubmit}>
      <input
        value={nweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={123}
      />
      <label htmlFor="attach-file" className="factoryInput__label">
        <div>
          <span>Add photos</span>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <input type="submit" value="SEND" />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ display: "none" }}
      />
      {attachment ? (
        <PreviewAttachment>
          <span>Attached Image</span>
          <img alt="" src={attachment} />
          <button onClick={onClearAttachment}>Clear</button>
        </PreviewAttachment>
      ) : null}
    </Form>
  );
};

export default NweetFactory;
