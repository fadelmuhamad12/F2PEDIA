import React from 'react'

const NavListHamburger = ({lists, hamburger}) => {
  return (
    <>
    {hamburger && (
     <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-800  text-white'>
        {lists.map((list) => {
            return(
                <li key={list.name}
                className='px-4 cursor-pointer py-6 text-4xl text-gray-500'>
                {list.name}
                </li>
            )
        })}
     </ul>   
    )}
      
    </>
  )
}

export default NavListHamburger
