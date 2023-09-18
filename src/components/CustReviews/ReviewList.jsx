import React from "react";

const ReviewList = () => {
  const reviews = [
    {
      name: "Sarah",
      star: "⭐⭐⭐⭐⭐",
      comments:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    },
    {
      name: "Fadel",
      star: "⭐⭐⭐⭐",
      comments: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    },
    {
      name: "Diva",
      star: "⭐⭐⭐⭐⭐",
      comments: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    },
  
  ];

  return (
    <div className="p-4 md:flex md:mx-auto md:gap-24">
      {reviews.map(({ name, star, comments }) => {
        return (
          <div className="border border-gray-500 rounded-xl mx-auto p-2 mt-2 ">
            <span>{star}</span>
            <p className="font-extrabold">{name}</p>
            <p className="opacity-50">"{comments}"</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
