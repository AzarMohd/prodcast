import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import Screen from './components/screen1/Screen';
import Screens from './components/screen2/Screens';



function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Screen />}/>
    <Route exact path="/screens" element={<Screens />}/>
    <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
    
    </>
  );
}

export default App;
