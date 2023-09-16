import React from 'react'
import zara from "../../assets/Banners/zara-logo-1 1.svg"
import Gucci from "../../assets/Banners/gucci-logo-1 1.svg"
import Prada from "../../assets/Banners/prada-logo-1 1.svg"
import Ck from "../../assets/Banners/groups.svg"
import Versace from "../../assets/Banners/group.svg"




const Banners = () => {
  return (
    <div className=' w-screen flex bg-black justify-evenly py-4'>
        <img src={Versace} alt="" />
        <img src={zara} alt="" />
        <img src={Gucci} alt="" />
        <img src={Prada} alt="" />
        <img src={Ck} alt="" />
   

    </div>
  )
}

export default Banners
