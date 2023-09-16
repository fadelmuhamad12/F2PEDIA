import React from "react";
import cart from "../../assets/navbarIcon/Frame.svg";
import log from "../../assets/navbarIcon/log.svg";

const NavbarIcon = () => {
  return (
    <div className="flex gap-4">
      <img src={cart} alt="" />
      <img src={log} alt="" />
    </div>
  );
};

export default NavbarIcon;
