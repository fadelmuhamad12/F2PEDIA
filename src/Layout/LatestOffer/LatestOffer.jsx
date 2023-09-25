import React from "react";
import LatestOfferText from "./LatestOfferText";
import LatestOfferInput from "../../Components/LatestOfferInput";


const LatestOffer = () => {
  return (
    <div className="mt-20 mb-20 py-8 bg-black mx-2 rounded-3xl md:flex md:flex-row md:mx-48 md:justify-between">
      <LatestOfferText />
    <LatestOfferInput />
   
    </div>
  );
};

export default LatestOffer;
