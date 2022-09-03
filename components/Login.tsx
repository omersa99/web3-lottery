import React from "react"
import { useMetamask } from "@thirdweb-dev/react"
import { visitorMod } from "../constants"

import { useDisconnect } from "@thirdweb-dev/react"
function Login() {
  const connectWithMeta = useMetamask()
  const visitorMode = visitorMod

  const disconnect = useDisconnect()

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          // src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          src="https://upload.wikimedia.org/wikipedia/he/0/0e/Touch_ID_logo.png"
          alt=""
        />
      </div>
      <h1 className="text-6xl text-white font-serif">Omar Lottery</h1>
      <p className="text-white">Get Started By logging in with your Wallet</p>

      <button
        className="bg-white px-8 w-30 py-5 mt-10 rounded-lg  shadow-lg font-bold"
        onClick={connectWithMeta}
      >
        Login Wiht MetaMask
      </button>

      {/* <button
        className="bg-white  w-30 px-8 py-5 mt-5 rounded-lg w-60 shadow-lg font-bold"
        onClick={useDisconnect()}
      >
        Just a Visitor
      </button> */}

      <div className="stats mt-5 mx-3 mb-3">
        <p className="text-lg text-emerald-900 pl-5">
          Hello my name is omar sabbah This webSite demonstartes a good
          dasdadkasdmaksldmsafssad asdasdsadhasdbjshdbjsadnbsajk djkas djask
        </p>
      </div>
    </div>
  )
}

export default Login
