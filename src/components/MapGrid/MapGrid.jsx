import "./MapGrid.scss";
import { useState, useEffect } from "react";

const MapGrid = ({ selectedTracks, setSelectedTracks, sendBackToList }) => {
  const handleClickMap = (track) => {
    sendBackToList(track);

    setSelectedTracks((prevSelectedTracks) =>
      prevSelectedTracks.filter((t) => t.id !== track.id)
    );
  };

  return (
    <div>
      <div className="map-box">
        {selectedTracks.length === 0 ? (
          <p className="map-box__description">Click Maps to Add</p>
        ) : (
          selectedTracks.map((track) => (
            <div
              className="map-box__list-item"
              key={track.id}
              onClick={() => handleClickMap(track)}
            >
              <img
                className="map-box__img"
                key={track.id}
                src={`http://localhost:5050/images/${track.img}`}
                alt={`Image ${track.name}`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MapGrid;
