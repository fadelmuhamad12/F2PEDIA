import React from 'react'

const NavbarInput = ({Input, Button}) => {
  return (
    <div className="relative flex w-full md:w-max mr-24 ">
    <Input
      type="search"
      label="Search For Products..."
      className="pr-20 "
      containerProps={{
        className: "min-w-[380px]",
      }}
    />
    <Button size="sm" className="!absolute right-1 top-1 rounded">
      Search
    </Button>
  </div>
  )
}

export default NavbarInput
