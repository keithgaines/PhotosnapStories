import React from 'react';

function Intro(props) {
  const { backgroundImage, title, description } = props;

  return (
    <div className="herocontainer">
      <div className="heroimage">
        <img src={backgroundImage} />
      </div>
      <div className="herotext" style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>{title}</h1>
        <p style={{ color: 'lightgray' }}>{description}</p>
      </div>
    </div>
  );
}

export default Intro;
