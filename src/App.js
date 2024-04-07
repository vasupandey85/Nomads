import React from 'react'
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Bookings from './components/Bookings/Bookings.jsx';
import Places from './components/Places/Places.jsx';
// import Try from './components/Try/Try.jsx';
// import Gallery from './Routes/Gallery';
// import Chat from './Routes/Chat';

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
    <div className="App">
      <Router>
      <Routes>
        <Route path="Home/" element={<Home/>}/>

        {/* <Route path="Bookings/" element={<Bookings/>}/> */}

        {/* <Route path="Gallery/" element={<Gallery/>}/>

        <Route path="Chat/" element={<Chat/>}/> */}

      </Routes>
      </Router>
      
     {/* <Navbar/>
  
     <Auth/>
     <Home/>
     <Main/> */}
     {/* <Gallery/>
     <Chat/> */}
     {/* <Footer/> */}
     {/* <Bookings/> */}
     {/* <Try/> */}
     <Places/>
     
     </div>
     </>
    
    
  ); 
}

export default App;
