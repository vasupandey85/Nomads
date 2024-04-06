import React from 'react'
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     {/* <Auth/> */}
     <Home/>
     <Main/>
     <Footer/>
    </>
  );
}

export default App;
