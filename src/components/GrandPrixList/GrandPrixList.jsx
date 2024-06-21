import "./GrandPrixList.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const GrandPrixList = () => {
  const [tracks, setTracks] = useState([]);

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
  return (
    <>
      <div className="maps">
        {tracks?.map((track) => (
          <div className="maps__list" key={track.id}>
            <img
              className="maps__img"
              src={`http://localhost:5050/images/tracks/${track.img}`}
              alt={track.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GrandPrixList;
