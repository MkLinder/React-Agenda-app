import {Box, ChakraProvider} from '@chakra-ui/react';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        bgGradient='radial(#C3B4D7, #ECD9EC)'
      >
        <Header/>
        <LoginPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
