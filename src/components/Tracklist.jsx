import React from "react";
import { useEffect, useState } from "react";
import "./Tracklist.css";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "TRACK";

const Track = ({ track, index, moveTrack, onTrackSelect, isCurrent }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item) => {
      if (item.index !== index) {
        moveTrack(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    // <>
    
    //   <td
    //     ref={(node) => ref(drop(node))}
    //     className={`track ${isCurrent ? "active" : ""}`}
    //     onClick={onTrackSelect}
    //   >
    //     {track.id}
    //   </td>
    //   <td
    //     ref={(node) => ref(drop(node))}
    //     className={`track ${isCurrent ? "active" : ""}`}
    //     onClick={onTrackSelect}
    //   >
    //     <img
    //       src={track.img}
    //       alt={track.title}
    //       className="track-image"
    //       height={30}
    //       width={30}
    //     />
    //     <span style={{textAlign:"center"}}>{track.title}</span>
    //   </td>
    //   <td
    //     ref={(node) => ref(drop(node))}
    //     className={`track ${isCurrent ? "active" : ""}`}
    //     onClick={onTrackSelect}
    //   >
    //     {track.playing}
    //   </td>
    //   <td
    //     ref={(node) => ref(drop(node))}
    //     className={`track ${isCurrent ? "active" : ""}`}
    //     onClick={onTrackSelect}
    //   >
    //     {track.time}
    //   </td>
    //   <td
    //     ref={(node) => ref(drop(node))}
    //     className={`track ${isCurrent ? "active" : ""}`}
    //     onClick={onTrackSelect}
    //   >
    //     {track.album}
    //   </td>
    // </>
    <>
    <td
        ref={(node) => ref(drop(node))}
        className={`track ${isCurrent ? "active" : ""} draggable`}
        onClick={onTrackSelect}
      >
        {track.id}
      </td>
      <td
        ref={(node) => ref(drop(node))}
        className={`track ${isCurrent ? "active" : ""} draggable`}
        onClick={onTrackSelect}
      >
        <img
          src={track.img}
          alt={track.title}
          className="track-image"
          height={30}
          width={30}
        />
        <span>{track.title}</span>
      </td>
      <td className={`track ${isCurrent ? "active" : ""}`} onClick={onTrackSelect}>
        {track.playing}
      </td>
      <td className={`track ${isCurrent ? "active" : ""}`} onClick={onTrackSelect}>
        {track.time}
      </td>
      <td className={`track ${isCurrent ? "active" : ""}`} onClick={onTrackSelect}>
        {track.album}
      </td>
    </>
  );
};

const Tracklist = ({
  tracks,
  setTracks,
  currentTrackIndex,
  setCurrentTrackIndex,
  setIsPlaying,
}) => {
  const moveTrack = (fromIndex, toIndex) => {
    const updatedTracks = [...tracks];
    const [movedTrack] = updatedTracks.splice(fromIndex, 1);
    updatedTracks.splice(toIndex, 0, movedTrack);
    setTracks(updatedTracks);
  };

  const [showModal, setShowModal] = useState(false);

    // Check if it's the user's first visit
    useEffect(() => {
        if (!localStorage.getItem('visited')) {
          setShowModal(true);
          localStorage.setItem('visited', 'true'); // Mark the user as having visited
        }
      }, []);
    
      const closeModal = () => {
        setShowModal(false);
      };
    

  return (
    <div className="tracklist">
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              🚀 Drag and drop to reorder the songs! Click on any song to start playing.
            </p>
            <button onClick={closeModal}>Got it!</button>
          </div>
        </div>
      )}
      <div className="txt">
        Popular{" "}
        <span style={{ fontSize: "13px", fontWeight: "200" }}>see all</span>
      </div>
      <div className="tracktable">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>TITLE</th>
        <th>PLAYING</th>
        <th>TIME</th>
        <th>ALBUM</th>
      </tr>
    </thead>
    <tbody>
      {tracks.map((track, index) => (
        <tr key={track.id}>
          <Track
            track={track}
            index={index}
            moveTrack={moveTrack}
            onTrackSelect={() => {
              setCurrentTrackIndex(index);
              setIsPlaying(true);
            }}
            isCurrent={currentTrackIndex === index}
          />
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Tracklist;
