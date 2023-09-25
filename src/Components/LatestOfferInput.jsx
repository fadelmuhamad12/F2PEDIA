import React from 'react'

const LatestOfferInput = () => {
  return (
        <div className="flex flex-col px-4 md:mt-6">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="  ✉ Enter Your Email Address"
        className="rounded-full py-1"
      />
      <button className="bg-white font-bold rounded-full px-4 mt-2 py-2 hover:bg-gray-500">Subscribe To Newsletter</button>
    </div>
  )
}

export default LatestOfferInput
