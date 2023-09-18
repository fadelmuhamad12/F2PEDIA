import React from "react";

const CarouselSelling = () => {
  const branding = [
    {
      sell: "200+",
      name: "International Branding",
    },
    {
      sell: "2000+",
      name: "High Quality Products",
    },
    {
      sell: "30.000+",
      name: "Happy Customers",
    },
  ];

  return (
    <div className="flex flex-wrap mt-12 md:ml-24 md:mt-12 xl:ml-40 gap-4 md:gap-24">
      {branding.map(({ sell, name }) => {
        return (
          <div className="ml-4 md:ml-0 " key={name}>
            <p className="text-2xl font-semibold">{sell}</p>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselSelling;
