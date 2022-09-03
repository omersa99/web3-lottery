import React from "react"
import { useAddress, useDisconnect } from "@thirdweb-dev/react"
import NavButton from "./NavButton"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
function Header() {
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-20 w-20 font-white"
          // src="https://insidebitcoins.com/wp-content/uploads/2022/01/online-crypto-lottery-website-1024x682.jpg"
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt=""
        />
        <div>
          <h1 className="text-lg text-white font-bold">Welcome ...</h1>
          <p className="text-xs text-emerald-500 truncate">
            User {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          {/* <NavButton title="Buy Tickets" isActive /> */}
          {/* <NavButton onClick={disconnect} title="LogOut" /> */}
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        {/* <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" /> */}

        <NavButton onClick={disconnect} title="LogOut" />
        {/* <span className="md:hidden">
          <NavButton onClick={disconnect} title="LogOut" />
        </span> */}
      </div>
    </div>
  )
}

export default Header
