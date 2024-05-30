import "./MapGrid.scss";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../Draggable/Draggable";
import Droppable from "../Droppable/Droppable";

const MapGrid = ({ selectedTracks, setSelectedTracks, sendBackToList }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleClickMap = (track) => {
    sendBackToList(track);

    setSelectedTracks((prevSelectedTracks) =>
      prevSelectedTracks.filter((t) => t.id !== track.id)
    );
  };

  const handleDragEnd = (event) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  return (
    <div>
      <div className="map-box">
        {selectedTracks.length === 0 ? (
          <p className="map-box__description">Click Maps to Add</p>
        ) : (
          selectedTracks.map((track) => (
            <DndContext onDragEnd={handleDragEnd}>
              {!isDropped ? (
                <Draggable>
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
                </Draggable>
              ) : null}
            </DndContext>
          ))
        )}
      </div>
    </div>
  );
};

export default MapGrid;
