import React from 'react'

function Intro(props) {
  const { backgroundImage, title, description } = props

  const hasImage = Boolean(backgroundImage)

  return (
    <section className={`intro ${hasImage ? 'intro--split' : 'intro--full'}`}>
      {hasImage && (
        <div className="intro__image">
          <img src={backgroundImage} alt="" />
        </div>
      )}

      <div className="intro__content">
        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  )
}

export default Intro
