import React from 'react';

const StoriesIntro: React.FC = () => {
  return (
    <div>
      <div className="heroimage">
        <div className="introtext">
          <p>Last month's featured story</p>
          <h1>Hazy full moon of Appalachia</h1>
          <p style={{ color: 'lightgray' }}>March 2nd 2020<span style={{ color: 'white' }}> by John Appleseed</span></p>
          <br />
          <p style={{ color: 'lightgray' }}>The dissected plateau area, while not actually made up of geological mountains,
            is popularly called "mountains," especially in eastern Kentucky and West Virginia,
            and while the ridges are not high, the terrain is extremely rugged.</p>
          <h3>READ THE STORY</h3></div>
        </div>
      </div>
  );
};

export default StoriesIntro;
