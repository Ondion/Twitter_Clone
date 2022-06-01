import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import { Input } from "web3uikit";
import js from "../images/js.png";


const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
    },
    {
      img: netflix,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        >
        </Input>
        <div className="trends">
          Trends
          {trends.map((e, i) => {
            return (
              <div key={i} className="trend" onClick={() => window.open(e.link)}>
                <img src={e.img} alt={e.img} className="trendImg"></img>
                <div className="trendText">{e.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Rightbar;

