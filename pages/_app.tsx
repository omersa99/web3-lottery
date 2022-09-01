import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Change the Cahin ID to Poligon when going live :)
    // make it .env
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  )
}

export default MyApp
