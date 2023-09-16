import React from "react";

const NavbarList = () => {
  const lists = [
    {
      name: "Men's Clothes",
    },
    {
      name: "Women's Clothes",
    },
    {
      name: "Jewelry",
    },
    {
      name: "Electronics",
    },
  ];

  return (
    <>
      <div className="ml-auto flex gap-1 md:mr-4 ">
        <div className="flex gap-4 cursor-pointer">
          {lists.map((list) => {
            return <p className=" hover:text-blue-800">{list.name}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default NavbarList;
