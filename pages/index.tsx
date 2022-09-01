import { useAddress } from "@thirdweb-dev/react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import Login from "../components/Login"

const Home: NextPage = () => {
  //Login
  const address = useAddress()
  console.log(address)

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
