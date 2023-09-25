import React from "react";

const NavbarList = ({lists}) => {
 

  return (
    <>
      <div className="ml-auto gap-1 md:mr-4 ">
        <div className="flex gap-4 cursor-pointer">
          {lists.map((list) => {
            return <p key={list.name} className=" hover:text-blue-800">{list.name}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default NavbarList;
