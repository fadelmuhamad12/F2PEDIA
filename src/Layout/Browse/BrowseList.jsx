import React from "react";
import Casual from "../../assets/Browse/image11.png";
import Formal from "../../assets/Browse/image13.png";
import Party from "../../assets/Browse/image12.png";
import Gym from "../../assets/Browse/image14.png";

const BrowseList = () => {
  const browseList = [
    {
      name: "Casual",
      img: Casual,
    },
    {
      name: "Formal",
      img: Formal,
    },
    {
      name: "Party",
      img: Party,
    },
    {
      name: "Gym",
      img: Gym,
    },
  ];

  return (
    <div className="md:grid md:grid-cols-2">
        {browseList.map(({name,img})=> {
            return(
                <div className="flex items-center justify-center mt-4" key={name}> 
                    <img src={img}  alt="Foto" className="rounded-lg w-3/4 md:w-3/4 blur-sm hover:blur-none hover:scale-110 duration-300 "/>
                </div>
            )
        })}
    </div>

  );
};

export default BrowseList;
