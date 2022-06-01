import React from "react";
import { Link } from "react-router-dom";
import TweetInFeed from "../components/TweetInFeed";
import { defaultImgs } from "../defaultimgs";
import './Profile.css';


const Profile = () => {


  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src={ defaultImgs[1] } />
      <div className="pfpContainer">
        <img className="profilePFP" alt="none" src={defaultImgs[0]}></img>
        <div className="profileName">Fulana</div>
        <div className="profileWallet">0x42..258</div>
        <Link to="/settings">
          <div className="profileEdit">Edit profile</div>
        </Link>
        <div className="profileTabs">
          <div className="profileTab">
            Your Tweets
          </div>
        </div>
      </div>
      <TweetInFeed profile={ true } />
    </>
  );
};

export default Profile; 

