import Banner from "./Banner";
import NewArrival from "./NewArrival";
import Sponser from "./Sponser";
import TopSelling from "./TopSelling";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Sponser></Sponser>
      <NewArrival></NewArrival>
      <TopSelling></TopSelling>
    </div>
  );
};

export default Homepage;
