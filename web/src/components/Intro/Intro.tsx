import React from 'react'

function Intro(props) {
  const { backgroundImage, title, description } = props

  return (
    <section className="intro">
      {backgroundImage && (
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
