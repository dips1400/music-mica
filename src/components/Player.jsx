import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import "./Tracklist.css"
import Pause from "../images/apuse.png";
import Play from "../images/play.png";
import Next from "../images/next2.png";
import Previous from "../images/icons8-previous-48.png";
const Player = ({ tracks, currentTrackIndex, setCurrentTrackIndex, isPlaying, setIsPlaying }) => {
    const soundRef = useRef(null);
  
    useEffect(() => {
      if (isPlaying) {
        playTrack();
      } else {
        pauseTrack();
      }
  
      return () => {
        if (soundRef.current) {
          soundRef.current.stop();
        }
      };
    }, [currentTrackIndex, isPlaying]);
  
    const playTrack = () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
      soundRef.current = new Howl({
        src: [tracks[currentTrackIndex].src],
        html5: true,
      });
      soundRef.current.play();
      setIsPlaying(true);
    };
  
    const pauseTrack = () => {
      if (soundRef.current) {
        soundRef.current.pause();
      }
      setIsPlaying(false);
    };
  
    const nextTrack = () => {
      setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
      setIsPlaying(false);
    };
  
    const prevTrack = () => {
      setCurrentTrackIndex(
        (currentTrackIndex - 1 + tracks.length) % tracks.length
      );
      setIsPlaying(false);
    };
  
    return (
      <div className="player">
        <h2>Now Playing</h2>
        <div className='info'>
        <img src={tracks[currentTrackIndex].img} alt={tracks[currentTrackIndex].title}
        height={90} width={190} style={{borderRadius:"0.2rem"}}/>
        <h3>{tracks[currentTrackIndex].title}</h3>
        <h4>{tracks[currentTrackIndex].album}</h4>
        </div>
        <div className="controls">
          <button onClick={prevTrack}><img src={Previous} alt='previous'
           height={23} width={23}/></button>
          {isPlaying ? (
            <button onClick={pauseTrack}><img src={Pause} alt='previous'
            height={23} width={23}/></button>
          ) : (
            <button onClick={playTrack}><img src={Play} alt='play'
            height={23} width={23}/></button>
          )}
          <button onClick={nextTrack}><img src={Next} alt='next'
           height={23} width={23}/></button>
        </div>
      </div>
    );
  };
export default Player