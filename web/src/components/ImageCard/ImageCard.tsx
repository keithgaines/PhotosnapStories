import React from 'react'

interface ImageComponentProps {
  date: string
  title: string
  artist: string
  backgroundImageSrc: string
}

const ImageComponentStories: React.FC<ImageComponentProps> = ({
  date,
  title,
  artist,
  backgroundImageSrc,
}) => {
  return (
    <article
      className="image-wrapper"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
      }}
    >
      <div className="image-info">
        <p>{date}</p>

        <h3 className="image-title">{title}</h3>

        <p className="image-artist">by {artist}</p>
      </div>

      <div className="image-body">
        <p className="image-story">Read Story</p>

        <img className="image-arrow" src="/shared/desktop/arrow.svg" alt="" />
      </div>
    </article>
  )
}

export default ImageComponentStories
