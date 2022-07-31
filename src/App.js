import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
} from 'react-router-dom';
import './App.css';
// import { useState } from 'react';
import Sidebar from 'components/Sidebar';
import { Container } from 'components/styles/Container.styled';
import { Flex } from 'components/styles/Flex.styled';
import GlobalStyles from 'components/styles/Global';
import { 
  Grid, 
  LeftPanel, 
  RightPanel, 
} from 'components/styles/Grid.styled';
import Home from 'Pages/Home';

import BtnColor from 'Pages/BtnColor';
import BtnShape from 'Pages/BtnShape';
import BtnFill from 'Pages/BtnFill';
import BtnBorder from 'Pages/BtnBorder';
import BtnAlignment from 'Pages/BtnAlignment';
import BtnShadow from 'Pages/BtnShadow';
import Results from 'Pages/Results';
import ErrorPage from 'Pages/ErrorPage';
// import { ChromePicker } from 'react-color';


function App() {
    // const [color, setColor] = useState('#5750ff');
    // const [textColor, setTextColor] = useState('#fff');
    // const [btnAttribute, setBtnAttribute] = useState({backgroundColor: ''});
    
  return (
    <>
      <Router>
        {/* <GlobalStyles /> */}
        <Flex>
          <Container>
            <Grid>
              <LeftPanel>
                <Sidebar />
              </LeftPanel>
              <RightPanel>
                {/* <div className="colorPicker">
                  <div className="backgroundColor">
                    <p>Background Color</p>
                    <ChromePicker
                    
                      onChange={ (color) => setColor(color.hex)}
                    />
                  </div>
                  <div className="textColor">
                    <p>Text Color</p>
                    <ChromePicker
                      color={textColor}
                      onChange={ (color) => setTextColor(color.hex)}
                    />
                  </div>
                </div> */}
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/color' element={<BtnColor />} />
                  <Route path='/shape' element={<BtnShape />} />
                  <Route path='/fill' element={<BtnFill />} />
                  <Route path='/border' element={<BtnBorder />} />
                  <Route path='/alignment' element={<BtnAlignment />} />
                  <Route path='/shadow' element={<BtnShadow />} />
                  <Route path='/results' element={<Results />} />
                  <Route path='*' element={<ErrorPage />} />
                </Routes>
              </RightPanel>
            </Grid>
          </Container>
        </Flex>
      </Router>
    </> 
  );
}

export default App;
