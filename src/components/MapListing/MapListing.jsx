import "./MapListing.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const MapListing = ({ tracks, setTracks, addToGrid }) => {
  useEffect(() => {
    // Fetch image paths from the server
    const getTracks = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/tracks");
        setTracks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTracks();
  }, []);

  const handleMapClick = (track) => {
    addToGrid(track);

    // Remove track from list of tracks
    setTracks((prevTracks) => prevTracks.filter((t) => t.id !== track.id));
  };

  return (
    <div>
      <div className="maps">
        {tracks?.map((track) => (
          <div
            className="maps__list-item"
            key={track.id}
            onClick={() => handleMapClick(track)}
          >
            <img
              className="maps__img"
              src={`http://localhost:5050/images/${track.img}`}
              alt={track.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapListing;
