import React from "react";

const NavbarName = ({ Typography }) => {
  return (
    <>
      <Typography
        as="a"
        href="#"
        variant="h6"
        className="mr-4 ml-2 cursor-pointer py-1.5"
      >
        <div className="text-2xl font-extrabold text-black">
          F2<span>.</span>Pedia{" "}
        </div>
      </Typography>
    </>
  );
};

export default NavbarName;
