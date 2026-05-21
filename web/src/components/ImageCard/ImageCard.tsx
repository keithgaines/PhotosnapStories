import React from 'react'

type ImageComponentProps = {
  date: string
  title: string
  artist: string
  imageClass: string
}

const ImageComponentStories: React.FC<ImageComponentProps> = ({
  date,
  title,
  artist,
  imageClass,
}) => {
  return (
    <article className={`image-wrapper ${imageClass}`}>
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
