import React from 'react'
import shirt from "../../assets/NewArrivals/shirt.png"


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
    <div className='flex items-center justify-center md:gap-12'>
        {topSelling.map(({id, name, price, img})=> {
            return(
                <div key={id} >
                <img src={img} alt={name} />
                <div className=' flex flex-col items-center justify-center'>
                <p className='font-semibold '>{name}</p> 
                <p>${price}</p>
                </div>
            </div>
            )
        })}

    </div>
    <button className='flex mx-auto mt-6 p-4 bg-white border border-gray-300 w-3/4 md:w-24 items-center justify-center hover:bg-gray-500 rounded-full'>View All</button>
    </>
  )
}

export default TopSellingProducts
