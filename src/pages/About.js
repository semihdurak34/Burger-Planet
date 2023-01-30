import React from 'react';
import BannerImage from '../assets/1beef.jpg';

function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  );
}

export default About;

// style={{ backgroundImage: `url(${BannerImage})` }}
