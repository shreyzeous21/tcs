import React from "react";
import Slider from "./_components/Slider";
import Service from "./_components/Service";
import { IndustriesCarousel } from "./_components/IndustriesCarousel";
const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <Service />
      <IndustriesCarousel />
    </div>
  );
};

export default Home;