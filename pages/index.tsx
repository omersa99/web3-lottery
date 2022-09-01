import { useAddress, useContract } from "@thirdweb-dev/react"
import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Loading from "../components/Loading"
import Login from "../components/Login"

const Home: NextPage = () => {
  //Login -> user Address
  const address = useAddress()

  // contract address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  )

  //Connecting the contract & Loading
  if (isLoading) return <Loading />

  // Connecting the user
  if (!address) return <Login />

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
