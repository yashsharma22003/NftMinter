import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 import { WagmiProvider, http } from 'wagmi'
  import { mainnet, polygonAmoy } from 'wagmi/chains'
  import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
 import { getDefaultConfig } from '@rainbow-me/rainbowkit'

  /* getDefaultWallets is now optional */
 const config = getDefaultConfig({
   appName: 'RainbowKit demo',
   projectId: 'YOUR_PROJECT_ID',
   chains: [polygonAmoy],
   transports: {
     [polygonAmoy.id]: http('https://polygon-amoy.infura.io/v3/64f7def27620488690aadaac57350d98'),
   },
 })
 const queryClient = new QueryClient()
  const App = ({Component, pageProps}) => {
    return (
     <WagmiProvider config={config}>
       <QueryClientProvider client={queryClient}>
         <RainbowKitProvider>
           <Component {...pageProps}/>
           
          </RainbowKitProvider>
       </QueryClientProvider>
     </WagmiProvider>
    )
  }

export default App
