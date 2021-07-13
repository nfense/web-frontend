import './App.css';
import { ChakraProvider } from "@chakra-ui/react"

import Navbar from './components/layout/navbar';

import MainPage from './pages/main';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <div className="App">
        <MainPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
