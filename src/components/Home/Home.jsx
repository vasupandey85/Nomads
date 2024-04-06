import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here....'/>
                <i class="fa-light fa-location-dot"></i>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">Rs. 5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="50000" min="5000" />
              </div>
              </div>

              <div className="searchOptions flex">
              <i class="fa-solid fa-filter"></i>
              <span>MORE FILTERS</span>
              </div>
             
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <i class="fa-brands fa-facebook"/>
            <i class="fa-brands fa-instagram"/>
            <i class="fa-brands fa-x-twitter"/>
            
          </div>

          <div className="leftIcons">
          <i class="fa-regular fa-list"/>

          </div>
        </div>
      </div>
                 
    </section>
  )
}

export default Home