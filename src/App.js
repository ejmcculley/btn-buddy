import './App.css';
import InteractiveWindow from './components/InteractiveWindow';
import Sidebar from './components/Sidebar';
import GlobalStyles from './components/styles/Global';


function App() {
  return (
    <>
      <GlobalStyles />    
      <Sidebar />
      <InteractiveWindow />
    </>
  );
}

export default App;
