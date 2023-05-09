import React from 'react';


function HeroSection() {
  return (
    <div className="herocontainer">
      <div className="heroimage">
        <img />
      </div>
      <div className="createandshare" style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
        <p style={{ color: 'lightgray' }}>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
        <br />
        <br />
        <div>
          <h3>GET AN INVITE<span className="arrowimageinvert"><img src="/shared/desktop/arrow.svg" alt="arrow" /></span></h3>
        </div>
      </div>
      <div className="desk">
        <img />
      </div>
      <div className="beautifulstories">
        <h1>BEAUTIFUL STORIES EVERY TIME</h1>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
        <a href="stories.html">
          <h3>VIEW THE STORIES <div className="arrowimage"><img src="/shared/desktop/arrow.svg" alt="arrow" /></div></h3>
        </a>
      </div>
      <div className="manwithcamera">
        <img />
      </div>
      <div className="designedforeveryone">
        <h1>DESIGNED FOR EVERYONE</h1>
        <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
        <a href="stories.html">
          <h3>View the stories <div className="arrowimage"><img src="/shared/desktop/arrow.svg" alt="arrow" /></div></h3>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
