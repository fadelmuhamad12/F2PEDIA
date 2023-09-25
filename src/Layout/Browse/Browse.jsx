import React from 'react'
import BrowseText from './BrowseText'
import BrowseList from './BrowseList'

const Browse = () => {
  return (
    <div className='container mt-12'>
        <div className='bg-gray-300 mx-4 rounded-lg md:w-screen md:mx-auto '>
        <BrowseText />
        <BrowseList />

        </div>
     
    </div>
  )
}

export default Browse
