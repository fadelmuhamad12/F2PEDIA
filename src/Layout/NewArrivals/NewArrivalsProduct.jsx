import React, { useEffect, useState } from 'react'
import shirt from "../../assets/NewArrivals/shirt.png"
import axios from 'axios'


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

const [allProducts, setAllProducts] = useState([]);

const fetchAllProducts = async () => {
  try {
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    console.log(allProducts.data);
    setAllProducts(allProducts.data)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchAllProducts();
}, []);


  return (
    <>
    <div className='flex md:gap-12 items-center justify-center'>
        {allProducts.slice(0,3).map((product) => {
            return (
                <div key={product.id} className='cursor-pointer'>
                <img src={product.image} alt={product.name} className='hover:scale-110 duration-500'/>
                <div className=' flex flex-col items-center justify-center'>
                <p className='font-semibold '>{product.title}</p> 
                <p>${product.price}</p>
                <p>Rating: {product.rating.rate}</p>

                </div>
            </div>
            )
        })}



    {/* {newArrivals.map((data) => {
        return(
            <div key={data.id} className='cursor-pointer'>
                <img src={data.img} alt={data.name} className='hover:scale-110 duration-500'/>
                <div className=' flex flex-col items-center justify-center'>
                <p className='font-semibold '>{data.name}</p> 
                <p>${data.price}</p>
                </div>
            </div>
        )
    })} */}
      
    </div>
    <button className='flex mx-auto mt-6 p-4 bg-white border border-gray-300 w-3/4 md:w-24 items-center justify-center hover:bg-gray-500 rounded-full'>View All</button>
    </>
  )
}

export default NewArrivalsProduct
