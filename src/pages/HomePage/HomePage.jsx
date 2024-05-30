import "./HomePage.scss";
import MapListing from "../../components/MapListing/MapListing";

import marioKartTracks from "../../data/mapListings.json";

const HomePage = () => {
  console.log(marioKartTracks);
  console.log("../../assets/images/", marioKartTracks[0].img);
  return (
    <main className="home-page">
      <MapListing />
    </main>
  );
};

export default HomePage;
