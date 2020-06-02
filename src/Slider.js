import React from 'react';
import {Slide} from 'react-slideshow-image';
import img1 from  './img/slider1.jpg';
import img2 from "./img/slider2.jpg";
import img3 from "./img/slider3.jpg";
import './Slide.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
};

const Slideshow = () => {
    return (
      <div className="containerSlide">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img src={img1} alt="img1" />
              <span>Slide 1</span>
            </div>
            <h2 className="tex-center">First Slide</h2>
          </div>
          <div className="each-slide">
            <div>
              <img src={img2} alt="img2" />
              <span>Slide 2</span>
            </div>
            <h2 className="tex-center">Second Slide</h2>
          </div>
          <div className="each-slide">
            <div>
              <img src={img3} alt="img3" />
              <span>Slide 3</span>
            </div>
            <h2 className="tex-center">Third Slide</h2>
          </div>
        </Slide>

      </div>
    );

}

export default Slideshow;