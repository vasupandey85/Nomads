import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


function App() {
  // const location = useLocation();
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element= {<Auth/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
