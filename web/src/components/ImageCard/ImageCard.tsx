import React from 'react';

interface ImageComponentProps {
  date: string;
  title: string;
  artist: string;
  backgroundImageSrc: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  date,
  title,
  artist,
  backgroundImageSrc,
}) => {
  const wrapperStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
  };

  return (
    <div className="image-wrapper" style={wrapperStyle}>
      <div className="image-info">
        <p>{date}</p>
        <h3 className="image-title">{title}</h3>
        <p className="image-artist"> by {artist}</p>
      </div>
      <hr />
      <div className="image-body">
        <p className="image-story">READ STORY</p>
        <img
          className="image-arrow"
          src="/shared/desktop/arrow.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
