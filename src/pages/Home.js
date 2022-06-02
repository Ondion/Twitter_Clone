import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon } from "web3uikit";
import { useState, useRef } from "react";
import TweetInFeed from "../components/TweetInFeed";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const Home = () => {

  const [selectedFile, setSelectedFile] = useState();
  const inputFile = useRef(null);

  const onImageClick = () => {
    inputFile.current.click();
  };

  const changeHandle = (e) => {
    const img = e.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };

  return (
    <>
      <div className="pageIdentify">Home</div>
      <div className=" mainContent">
        <div className="profileTweet">
          <img alt="none" src={defaultImgs[0]} className="profilePic" >
          </img>
          <div className="tweetBox">
            <TextArea
              label=""
              name="tweetTxtArea"
              value="BraisCompany"
              type="text"
              width="95%"
            >
            </TextArea>
            {selectedFile && (
              <img
                alt="none"
                src={ selectedFile }
                width="80%"
                className="tweetImg">
              </img>
            )}
            <div className="imgOrTweet">
              <div className="imgDiv" onClick={ onImageClick }>
                <input
                  type="file"
                  name="file"
                  ref={inputFile}
                  onChange = { changeHandle }
                  style={{ display: "none" }}
                />
                <Icon fill="#1da1f2" size={20} svg="image"></Icon>
              </div>
              <div className="tweetOptions">
                <div className="tweet">Tweet</div>
                <div className="tweet" style={{ backgroundColor: "purple" }}>
                  <Icon fill="#fff" size={20} svg="matic"></Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TweetInFeed profile={false} />
      </div>
    </>
  );
};

export default Home;
