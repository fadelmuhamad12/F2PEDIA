import React from 'react'
import shirt from "../../assets/NewArrivals/shirt.png"

const NewArrivalsProduct = () => {
    const newArrivals = [{
        id:"p1",
        name: "T-shirt",
        price: "120",
        img: shirt
    },
    {
        id:"p2",
        name:"Balenciaga",
        price: "499",
        img: shirt,
    },
    {
        id:"p3",
        name: "Thrasher",
        price: "99",
        img: shirt,
    },
    {
        id:"p4",
        name: "Gucci",
        price: "990",
        img: shirt,
    },
    
]



  return (
    <>
    <div className='flex md:gap-12 items-center justify-center '>
    {newArrivals.map((data) => {
        return(
            <div key={data.id} >
                <img src={data.img} alt={data.name} />
                <div className=' flex flex-col items-center justify-center'>
                <p className='font-semibold '>{data.name}</p> 
                <p>${data.price}</p>
                </div>
            </div>
        )
    })}
      
    </div>
    <button className='flex mx-auto mt-6 p-4 bg-white border border-gray-300 w-3/4 md:w-24 items-center justify-center hover:bg-gray-500 rounded-full'>View All</button>
    </>
  )
}

export default NewArrivalsProduct
