import Banner from "./Banner";
import CoustomarReview from "./CoustomarReview";
import DressStyle from "./DressStyle";
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
      <DressStyle></DressStyle>
      <CoustomarReview></CoustomarReview>
    </div>
  );
};

export default Homepage;
