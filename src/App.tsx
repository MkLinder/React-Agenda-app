import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider, UserContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';

import MainRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <UserContextProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes/>
            </Layout>
          </ChakraProvider>
        </UserContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
