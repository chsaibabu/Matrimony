import React from 'react';
import './style.css';
import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://economictimes.indiatimes.com/thumb/msid-84203769,width-1200,height-900,resizemode-4,imgsize-208253/wedd.jpg?from=mdr',
    caption: 'Welcome To Matrimony Site',
  },
  {
    url: 'https://vakilsearch.com/blog/wp-content/uploads/2022/07/marriage-registration-in-delhi.png',
    caption: 'Welcome To Matrimony Site',
  },
  {
    url: 'https://www.bonobology.com/wp-content/uploads/2017/10/indian-wedding.jpg',
    caption: 'Welcome To Matrimony Site',
  },
];

const spanStyle = {
  color: 'white',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '450px',
};

export default function App() {
  return (
    <div className="container md-2">
      <div className="nav d-f col-12 d-flex justify-content-between">
        <img
          className="logo float-start m-2"
          src="https://www.kindpng.com/picc/m/161-1618399_logo-wedding-graphic-design-photography-wedding-logo-clipart.png"
          alt="Logo"
        />
        <div className="buttons fs-6 m-2">
          <button className="btn-primary rounded-3 me-2">Login</button>
          <button className="btn-success rounded-3 ">Registration</button>
        </div>
      </div>
      <div className="main">
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
