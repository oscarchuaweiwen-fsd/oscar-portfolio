import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../libs/theme';
import Fonts from '../components/fonts'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ParallaxProvider>
      <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
