import React from "react"
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid"
import {
  useAddress,
  useContract,
  useContractData,
  useContractCall,
} from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { currency } from "../constants"
import toast from "react-hot-toast"

function AdminControls() {
  // contract address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  )

  //Get TotalCommission
  const { data: TotalCommission } = useContractData(
    contract,
    "operatorTotalCommission"
  )

  const { mutateAsync: DrawWinnerTicket } = useContractCall(
    contract,
    "DrawWinnerTicket"
  )
  const { mutateAsync: RefundAll } = useContractCall(contract, "RefundAll")
  const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw")
  const { mutateAsync: WithdrawCommission } = useContractCall(
    contract,
    "WithdrawCommission"
  )

  //WithdrawCommission Handler
  const onDrawWinnerTicket = async () => {
    const notification = toast.loading("Draw Winner Ticket ..")

    try {
      await DrawWinnerTicket([{}])
      toast.success("Draw Winner Ticket successfuly!", { id: notification })
      await onWithdrawCommission()
      await onrestartDraw()
    } catch (err) {
      toast.error("Somthing went wrong!", { id: notification })
    }
  }

  //WithdrawCommission Handler
  const onWithdrawCommission = async () => {
    const notification = toast.loading("withdraw commissions ..")

    try {
      await WithdrawCommission([{}])
      toast.success("withdraw successfuly!", { id: notification })
    } catch (err) {
      toast.error("Somthing went wrong!", { id: notification })
    }
  }

  //onrestartDraw Handler
  const onrestartDraw = async () => {
    const notification = toast.loading("restarting Draw ...")

    try {
      await restartDraw([{}])
      toast.success("restart Draw successfuly!", { id: notification })
    } catch (err) {
      toast.error("Somthing went wrong!", { id: notification })
    }
  }

  //WithdrawCommission Handler
  const onRefundAll = async () => {
    const notification = toast.loading("Refunding All ...")

    try {
      await RefundAll([{}])
      toast.success("Refund All successfuly!", { id: notification })
    } catch (err) {
      toast.error("Somthing went wrong!", { id: notification })
    }
  }

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="font-bold">Admin Controls</h2>
      <p className="mb-5">
        Total Commission to be withdrawn:{" "}
        {TotalCommission &&
          ethers.utils.formatEther(TotalCommission.toString())}{" "}
        {currency}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button onClick={onDrawWinnerTicket} className="admin-button">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw winner
        </button>
        <button onClick={onWithdrawCommission} className="admin-button">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button onClick={onrestartDraw} className="admin-button">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart the draw
        </button>
        <button onClick={onRefundAll} className="admin-button">
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" />
          Aefund All
        </button>
      </div>
    </div>
  )
}

export default AdminControls
