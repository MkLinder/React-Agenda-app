import {Box, ChakraProvider} from '@chakra-ui/react';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
