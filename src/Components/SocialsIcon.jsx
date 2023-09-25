import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const SocialsIcon = () => {
  return (
    <div className='flex gap-4 mt-2 cursor-pointer md:mt-12'>
    <FaInstagram size={20} />
      <FaTwitter size={20} />
      <FaFacebook size={20} />
      <FaGithub size={20} />
    </div>
  )
}

export default SocialsIcon
