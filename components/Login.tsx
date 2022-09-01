import React from "react"
import { useMetamask } from "@thirdweb-dev/react"

function Login() {
  const connectWithMeta = useMetamask()

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          alt=""
        />
      </div>
      <h1 className="text-6xl text-white font-serif">Omar Gambling Spot</h1>
      <p className="text-white">Get Started By logging in with your MetaMask</p>

      <button
        className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        onClick={connectWithMeta}
      >
        Login Wiht MetaMask
      </button>
    </div>
  )
}

export default Login
