import React from "react"
import {
  useAddress,
  useContract,
  useContractData,
  useContractCall,
} from "@thirdweb-dev/react"

function automation() {
  // contract address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
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

  const doit = async () => {
    try {
      await DrawWinnerTicket([{}])
      await WithdrawCommission([{}])
      await restartDraw([{}])
    } catch (err) {
      await RefundAll([{}])
      console.log(err)
    }
  }
  //   doit()
  //   return <>{doit}</>
}

export default automation
