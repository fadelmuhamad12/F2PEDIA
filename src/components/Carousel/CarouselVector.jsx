import React from "react";
import vct from "../../assets/Carousel/Vector.svg";
import vctLg from "../../assets/Carousel/VectorLg.svg";

const CarouselVector = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <img src={vct} alt="" />
        </div>

        <div className="ml-[700px] ">
          <img src={vctLg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CarouselVector;
