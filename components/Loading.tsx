import React from "react"
import GridLoader from "react-spinners/GridLoader"

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        {/* <img
          className="rounded-full h-20 "
          src="https://insidebitcoins.com/wp-content/uploads/2022/01/online-crypto-lottery-website-1024x682.jpg"
          alt=""
        />
        <h1 className="text-lg text-white font-serif">Loading ... </h1> */}

        <GridLoader color="white" size={40} />
      </div>
    </div>
  )
}

export default Loading
