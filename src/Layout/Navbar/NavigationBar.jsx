import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarIcon from "./NavbarIcon";
import NavbarInput from "./NavbarInput";
import NavbarName from "./NavbarName";
import NavbarList from "./NavbarList";
import NavListHamburger from "./NavListHamburger";

const NavigationBar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHideList = () => {
    setHamburger(!hamburger);
  };

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
      <Navbar className="max-w-full px-4 py-3 top-0 fixed">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
          <NavbarName Typography={Typography} />

          <div
            className="cursor-pointer text-black z-10 md:hidden"
            onClick={handleHideList}
          >
            {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
       
            <NavbarList lists={lists} />
            <NavbarInput Input={Input} Button={Button} />
            <NavbarIcon />
       
        </div>
      </Navbar>

      <NavListHamburger lists={lists} hamburger={hamburger} />
    </>
  );
};

export default NavigationBar;
