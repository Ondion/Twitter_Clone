import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Settings.css';
import { Input } from "web3uikit";


const Settings = () => {

  const [theFile, setTheFile] = useState();
  const [userName, setUserName] = useState();
  const [bio, setBio] = useState();

  return (
    <>
     <div className="pageIdentify">Settings</div>
     <div className="settingsPage">
       <Input
        label="Name"
        name="nameChange"
        width="100%"
        labelBgColor="#141d26"
      />
       <Input
        label="Bio"
        name="bioChange"
        width="100%"
        labelBgColor="#141d26"
      />

      <div className="pfp"></div>
     </div>
    </>
  );
};

export default Settings;

