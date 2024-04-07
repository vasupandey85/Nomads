import React, {useState} from 'react'
import '../../App.css'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  //function to toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  //function to remove navbar
  const removeNavbar = ()=>{
    setActive('navBar activeNavbar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
          <h1><MdOutlineTravelExplore className="icon"/>Nomads</h1>
          </a>
        </div>

        <div className={active}>
        </div>

        <div onClick={showNav}
        className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>

        <div className="navBar">
          <ul className="navLists grid">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Bookings</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Gallery</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Chat</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Sign In</a>
            </li>

            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavBar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar;
