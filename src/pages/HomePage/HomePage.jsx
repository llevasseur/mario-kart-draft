import "./HomePage.scss";
import { useState } from "react";
import MapListing from "../../components/MapListing/MapListing";
import MapGrid from "../../components/MapGrid/MapGrid";

const HomePage = () => {
  const [selectedTracks, setSelectedTracks] = useState([]);

  const [tracks, setTracks] = useState([]);

  const addToGrid = (track) => {
    setSelectedTracks((previousTracks) => [track, ...previousTracks]);
  };

  const sendBackToList = (track) => {
    setTracks((previousTracks) => [track, ...previousTracks]);
  };

  return (
    <main className="home-page">
      <MapGrid
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
        sendBackToList={sendBackToList}
      />
      <MapListing tracks={tracks} setTracks={setTracks} addToGrid={addToGrid} />
    </main>
  );
};

export default HomePage;
