import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveWindow from 'components/InteractiveWindow';
import Sidebar from 'components/Sidebar';
import { Container } from 'components/styles/Container.styled';
import { Flex } from 'components/styles/Flex.styled';
import GlobalStyles from 'components/styles/Global';
import { Grid, LeftPanel, RightPanel } from 'components/styles/Grid.styled';
import Home from 'Pages/Home';
import BtnColor from 'Pages/BtnColor';
import BtnShape from 'Pages/BtnShape';
import BtnFill from 'Pages/BtnFill';
import BtnBorder from 'Pages/BtnBorder';
import BtnAlignment from 'Pages/BtnAlignment';
import BtnShadow from 'Pages/BtnShadow';
import BtnHover from 'Pages/BtnHover';
import Results from 'Pages/Results';
import ErrorPage from 'Pages/ErrorPage';


function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Flex>
          <Container>
            <Grid>
              <LeftPanel>
                <Sidebar />
              </LeftPanel>
              <RightPanel>
                <InteractiveWindow>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/color' element={<BtnColor />} />
                    <Route path='/shape' element={<BtnShape />} />
                    <Route path='/fill' element={<BtnFill />} />
                    <Route path='/border' element={<BtnBorder />} />
                    <Route path='/alignment' element={<BtnAlignment />} />
                    <Route path='/shadow' element={<BtnShadow />} />
                    <Route path='/hover' element={<BtnHover />} />
                    <Route path='/results' element={<Results />} />
                    <Route path='*' element={<ErrorPage />} />
                  </Routes>
                </InteractiveWindow> 
              </RightPanel>
            </Grid>
          </Container>
        </Flex>
      </Router>
    </>
  );
}

export default App;
