import React from 'react'
import shirt from "../../assets/NewArrivals/shirt.png"
import ButtonViewAll from '../../Components/ButtonViewAll'


const TopSellingProducts = () => {
    const topSelling = [
        {
            id: "p1",
            name: "Ps5",
            price: 599,
            img: shirt,
        },
        {
            id: "p2",
            name: "Ps6",
            price: 600,
            img: shirt,
        },
        {
            id: "p3",
            name: "Ps7",
            price: 700,
            img: shirt,
        },
        {
            id: "p4",
            name: "Ps8",
            price: 800,
            img: shirt,
        },
    
    
    ]




  return (
    <>
    <div className='flex items-center justify-center md:gap-12 '>
        {topSelling.map(({id, name, price, img})=> {
            return(
                <div key={id} className='cursor-pointer'>
                <img src={img} alt={name} className='hover:scale-110 duration-500'/>
                <div className=' flex flex-col items-center justify-center'>
                <p className='font-semibold '>{name}</p> 
                <p>${price}</p>
                </div>
            </div>
            )
        })}

    </div>
    <ButtonViewAll />
    </>
  )
}

export default TopSellingProducts
