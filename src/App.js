import './App.css';
import InteractiveWindow from './components/InteractiveWindow';
import Sidebar from './components/Sidebar';
import { Container } from './components/styles/Container.styled';
import { Flex } from './components/styles/Flex.styled';
import GlobalStyles from './components/styles/Global';
import { Grid, LeftPanel, RightPanel } from './components/styles/Grid.styled';


function App() {
  return (
    <>
      <GlobalStyles />
      <Flex>
        <Container>
          <Grid>
            <LeftPanel>
              <Sidebar />
            </LeftPanel>
            <RightPanel>
              <InteractiveWindow /> 
            </RightPanel>
          </Grid>
        </Container>
      </Flex>
    </>
  );
}

export default App;
