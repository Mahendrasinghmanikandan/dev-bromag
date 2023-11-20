import React from "react";
import TopFoods from "./TopFoods";
import Banner from "./Banner";
import TopVideos from "./TopVideos";
import NonVeg from "./NonVeg";
import CustomerReview from "./CustomerReview";
import Fixedbanner from "./Fixedbanner";
import PlayContext from "./PlayContext";
import Advertisement from "./Advertisement";
import VegFoods from "./Veg";
import Locations from "./Locations";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopFoods />
      <TopVideos />
      <NonVeg />
      <CustomerReview />
      <VegFoods />
      <div className="flex flex-col lg:gap-y-[30vh] pt-10">
        <Fixedbanner />
        <PlayContext />
      </div>
      <Advertisement />
      <Locations />
    </div>
  );
};

export default Home;
