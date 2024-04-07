import React from 'react';
import './places.css'; // Importing CSS file

const YourComponent = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Kashmir" target="_blank">
                    <img className="img img-responsive" src="https://images.pexels.com/photos/8742541/pexels-photo-8742541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Muir" />
                  </a>
                </div>
                <div className="information">
                  <h1>Kashmir</h1>
                  <h3>"Kashmir: The Valley of Eternal Beauty"</h3>
                  <hr />
                  <p>
                    
Nestled in the northernmost part of India, Kashmir stands as a picturesque paradise, renowned for its unparalleled beauty and serene landscapes. Enveloped by the majestic Himalayas, this region boasts breathtaking vistas of snow-capped peaks, lush meadows, and shimmering lakes that captivate the senses. Srinagar, the summer capital, is adorned with the iconic Dal Lake, where vibrant houseboats gently float on its tranquil waters amidst a backdrop of towering Chinar trees. The Mughal Gardens, with their meticulously manicured lawns and vibrant flowerbeds, offer a glimpse into the region's rich cultural heritage. Beyond the urban charm lies Gulmarg, a haven for adventure enthusiasts, renowned for its world-class skiing slopes and verdant golf courses. Pahalgam, with its verdant valleys and gushing rivers, beckons travelers seeking solace in nature's embrace. Furthermore, the region's rich tapestry of culture and tradition, exemplified by its colorful festivals and warm hospitality, promises an enriching experience for visitors. With its unparalleled beauty and cultural richness, Kashmir stands as a timeless destination, inviting travelers to immerse themselves in its spellbinding allure.
                  </p>
                  <blockquote>"Kashmir, where heaven kisses the Earth in a timeless embrace.""<small></small></blockquote>
                  <div className="tree">
                    <a href="https://en.wikipedia.org/wiki/Kashmir" target="_blank">
                      <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                    </a>
                    <h4>
                      <a href="https://en.wikipedia.org/wiki/Kashmir" target="_blank">
                        Read More At<br />
                        Wikipedia.org
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
