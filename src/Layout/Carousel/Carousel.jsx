import React from "react";
import img from "../../assets/Carousel/Rectangle.png";
import CarouselText from "./CarouselText";
import CarouselSelling from "./CarouselSelling";
import CarouselVector from "./CarouselVector";
import ButtonCarousel from "../../Components/ButtonCarousel";
const Carousel = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="flex h-screen w-screen bg-cover"
      >
        <div>
          <CarouselText />
          <ButtonCarousel />
          <CarouselSelling />
        </div>
        {/* <CarouselVector /> */}
      </div>
    </div>
  );
};

export default Carousel;
