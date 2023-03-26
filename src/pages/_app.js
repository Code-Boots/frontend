import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }
  const theme = extendTheme({ breakpoints })

  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
