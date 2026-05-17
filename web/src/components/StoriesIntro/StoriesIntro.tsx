import React from 'react'

const StoriesIntro: React.FC = () => {
  return (
    <section className="stories-intro">
      <div className="stories-intro__content">
        <p className="stories-intro__eyebrow">
          Last month&apos;s featured story
        </p>

        <h1>Hazy full moon of Appalachia</h1>

        <p className="stories-intro__meta">
          March 2nd 2020 <span>by John Appleseed</span>
        </p>

        <p className="stories-intro__description">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </p>

        <a className="stories-intro__link" href="/stories">
          Read the story
          <img src="/shared/desktop/arrow.svg" alt="" />
        </a>
      </div>
    </section>
  )
}

export default StoriesIntro
