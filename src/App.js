import React from 'react'
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Bookings from './Routes/Bookings';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route element={Home/}/>
      </Routes>
     <Navbar/>
     {/* <Auth/> */}
     <Home/>
     <Main/>
     <Footer/>
     <Bookings/>
     </div>
    
    
  ); 
}

export default App;
