import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../libs/theme';
import Fonts from '../components/fonts'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
