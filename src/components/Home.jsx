import React from "react";
import { useState } from "react";
import "./Home.css";
import Search from "../images/search2.png";
import Verified from "../images/Verified.png";
import Singer from "../images/Michael.png";
import Michael1 from "../images/billiejean.png";
import Michael2 from "../images/m2.png";
import Michael3 from "../images/m3.png";
import Tracklist from "./Tracklist";
import Player from "./Player";
import billieJean from "../music/billiejean.mp3";
import beatit from "../music/beatit.mp3";
import smoothcriminal from "../music/smoothcriminal.mp3";
import DontStopTillYou from "../music/dontstoptillyou.mp3";
import rockwithyou from "../music/rockwithyou.mp3";

const Home = () => {
  const [tracks, setTracks] = useState([
    {
      id: "1",
      title: "Billie Jean",
      playing: "1.04.023.234",
      time: "00.30",
      album: "Thriller 25 Super",
      src: billieJean,
      img:Michael1,
    },
    {
      id: "2",
      title: "Beat It",
      playing: "00.323.033.0334",
      time: "00.30",
      album: "Thriller 25 Super",
      src: beatit,
      img: Michael1,
    },
    {
      id: "3",
      title: "Smooth Criminal",
      playing: "110.3323.033.0334",
      time: "00.30",
      album: "Thriller 25 Super",
      src: smoothcriminal,
      img: Michael2 ,
    },
    {
      id: "4",
      title: "Don't Stop Till You Get Enough",
      playing: "110.3323.033.0334",
      time: "00.30",
      album: "Bad 25th Anniversary",
      src: DontStopTillYou,
      img: Michael3,
    },
    {
      id: "5",
      title: "Rock With You",
      playing: "110.3323.033.0334",
      time: "00.30",
      album: "Off The Wall",
      src: rockwithyou,
      img: Michael3,
    },
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="music-container">
      <div className="music-content">
        <div className="info-content">
          <div className="navigation">
            <div className="links">
              <ul>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Live</a>
                </li>
                <li>
                  <a href="#">Radio</a>
                </li>
              </ul>
            </div>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Michael Jackson"
              />
              <img src={Search} alt="search" height={20} width={20} />
            </div>
          </div>
          <div className="cardbox">
            <div className="box">
              <div className="textcontent">
                <div className="row1">
                  <img src={Verified} alt="verify" height={20} width={20} />
                  <span>
                    <p>Verified artist</p>
                  </span>
                </div>
                <div className="row2">
                  <h3>Michael Jackson</h3>
                  <br></br>
                  <p>27,852,321 monthly listeners</p>
                </div>
                <img src={Singer} className="singer" alt="singer" />
              </div>
            </div>
          </div>
        </div>
        <div className="music-list">
          <Tracklist
            tracks={tracks}
            setTracks={setTracks}
            currentTrackIndex={currentTrackIndex}
            setCurrentTrackIndex={setCurrentTrackIndex}
            setIsPlaying={setIsPlaying}
          />
        </div>
      </div>
      <div className="play-music">
        <Player
          tracks={tracks}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrackIndex={setCurrentTrackIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
};

export default Home;
