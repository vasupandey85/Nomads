import React from 'react'
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import User from './components/User/User';
=======
import Bookings from './components/Bookings/Bookings.jsx';
import Places from './components/Places/Places.jsx';
// import Try from './components/Try/Try.jsx';
// import Gallery from './Routes/Gallery';
// import Chat from './Routes/Chat';

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
>>>>>>> 4b273dab4d1e7a43199183368802a56c7d20e8b5

const App = () =>{
  return (
    <>
<<<<<<< HEAD
     {/* <Navbar/> */}
     {/* <Auth/> */}
     {/* <Home/>
     <Main/>
     <Footer/> */}
     <User/>
    </>
  );
=======
    
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
>>>>>>> 4b273dab4d1e7a43199183368802a56c7d20e8b5
}

export default App;
