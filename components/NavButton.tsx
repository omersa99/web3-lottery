import React from "react"
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid"

interface Props {
  title?: string
  isActive?: boolean
  onClick?: () => void
}

function NavButton({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && "bg-[#036756]"
      } hover:bg-[#036756] text-white py-2 px-4 rounded-lg text-bold`}
    >
      <ArrowLeftOnRectangleIcon className="h-10 w-10 mx-auto text-white cursor-pointer" />
      {/* {title} */}
    </button>
  )
}

export default NavButton
