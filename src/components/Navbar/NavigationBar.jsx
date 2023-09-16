import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import React from "react";
import NavbarIcon from "./NavbarIcon";
import NavbarInput from "./NavbarInput";
import NavbarName from "./NavbarName";
import NavbarList from "./NavbarList";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-3 sticky top-0">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
          <NavbarName Typography={Typography} />
          <NavbarList />
          <NavbarInput Input={Input} Button={Button} />
          <NavbarIcon />
        </div>
      </Navbar>
    </>
  );
};

export default NavigationBar;
