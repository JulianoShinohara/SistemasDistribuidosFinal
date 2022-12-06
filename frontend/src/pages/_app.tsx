import '../styles/globals.css'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider>        
          <Component {...pageProps} />        
      </ChakraProvider>
    </NextAuthProvider>
   
  )
}

export default MyApp
