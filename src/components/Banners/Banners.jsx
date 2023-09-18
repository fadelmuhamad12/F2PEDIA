import React from "react";
import zara from "../../assets/Banners/zara-logo-1 1.svg";
import Gucci from "../../assets/Banners/gucci-logo-1 1.svg";
import Prada from "../../assets/Banners/prada-logo-1 1.svg";
import Ck from "../../assets/Banners/groups.svg";
import Versace from "../../assets/Banners/group.svg";

const Banners = () => {
  const banners = [
    {
      img: Versace,
    },
    {
      img: zara,
    },
    {
      img: Gucci,
    },
    {
      img: Prada,
    },
    {
      img: Ck,
    },
  ];

  return (
    <div className="flex flex-wrap w-screen justify-evenly bg-black  py-4">
      {banners.map(({ img }) => {
        return <img src={img} alt="image" key={img} />;
      })}
    </div>
  );
};

export default Banners;
