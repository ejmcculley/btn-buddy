import './App.css';
import InteractiveWindow from './components/InteractiveWindow';
import Sidebar from './components/Sidebar';
import { Container } from './components/styles/Container.styled';
import { Flex } from './components/styles/Flex.styled';
import GlobalStyles from './components/styles/Global';


function App() {
  return (
    <>
      <GlobalStyles />
      <Flex>
        <Container>    
          <Sidebar />
          <InteractiveWindow />
        </Container>
      </Flex>
    </>
  );
}

export default App;
