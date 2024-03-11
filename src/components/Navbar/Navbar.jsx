import React from 'react'
import '../../App.css'
import './navbar.css'
export default function Navbar() {
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo"></a>
          <h1>Nomads</h1>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Bookings</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Gallery</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Chat</a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">Sign In</a>
            </li>

            <button className="btn">
              <a href="">Book Now</a>
            </button>
          </ul>
        </div>
      </header>
    </section>
  )
}
