import React from 'react';
import './bookings.css'; // Assuming you have your CSS file named styles.css

const HeroSection = () => {
  return (
    <section className="hero-section shreya">
      <div className="card-grid">
        {[...Array(20)].map((_, index) => (
          <a className="card" href="#" key={index}>
            <div className="card__background" style={{backgroundImage: `url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
              <button className="view-more-button">View More</button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
