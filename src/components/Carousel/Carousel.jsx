import React from "react";
import img from "../../assets/Carousel/Rectangle.png";
import CarouselText from "./CarouselText";
import CarouselButton from "./CarouselButton";
import CarouselSelling from "./CarouselSelling";
import CarouselVector from "./CarouselVector";
const Carousel = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="flex h-screen w-screen bg-cover"
      >
        <div>
          <CarouselText />
          <CarouselButton />
          <CarouselSelling />
        </div>
        {/* <CarouselVector /> */}
      </div>
    </div>
  );
};

export default Carousel;
