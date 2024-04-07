import React from 'react';
import './Booking.css';

// Define MenuButton component
const MenuButton = () => {
  return (
    <div className="menu-btn">
      <i className="fas fa-bars fa-2x"></i>
    </div>
  );
};

// Define Nav component
const Nav = () => {
  return (
    <nav className="main-nav">
      <img src="https://i.ibb.co/wwLhz98/logo.png" alt="Microsoft" className="logo" />

      <ul className="main-menu">
        <li><a href="#">Office</a></li>
        <li><a href="#">Windows</a></li>
        <li><a href="#">Surface</a></li>
        <li><a href="#">Xbox</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Support</a></li>
      </ul>

      <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Define Showcase component
const Showcase = () => {
  return (
    <header className="showcase">
      <h2>Surface Deals</h2>
      <p>
        Select Surfaces are on sale now - save while supplies last
      </p>
      <a href="#" className="btn">
        Shop Now <i className="fas fa-chevron-right"></i>
      </a>
    </header>
  );
};

// Define HomeCards1 component
const HomeCards1 = () => {
  return (
    <section className="home-cards">
      {/* Add card contents here */}
    </section>
  );
};

// Define Xbox component
const Xbox = () => {
  return (
    <section className="xbox">
      {/* Add Xbox content here */}
    </section>
  );
};

// Define HomeCards2 component
const HomeCards2 = () => {
  return (
    <section className="home-cards">
      {/* Add card contents here */}
    </section>
  );
};

// Define Carbon component
const Carbon = () => {
  return (
    <section className="carbon dark">
      {/* Add Carbon content here */}
    </section>
  );
};

// Define Follow component
const Follow = () => {
  return (
    <section className="follow">
      {/* Add Follow content here */}
    </section>
  );
};

// Define Links component
const Links = () => {
  return (
    <section className="links">
      {/* Add Links content here */}
    </section>
  );
};

// Define Footer component
const Footer = () => {
  return (
    <footer className="footer">
      {/* Add Footer content here */}
    </footer>
  );
};

// Main App component
const App = () => {
  return (
    <div className="container">
      <MenuButton />
      <Nav />
      <Showcase />
      <HomeCards1 />
      <Xbox />
      <HomeCards2 />
      <Carbon />
      <Follow />
      <Links />
      <Footer />
    </div>
  );
};

export default App;
