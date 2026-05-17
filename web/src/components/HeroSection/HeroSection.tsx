import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className="story-section story-section--dark">
        <div className="story-content story-content--dark">
          <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>

          <a className="text-link text-link--light" href="/pricing">
            Get an invite
            <img src="/shared/desktop/arrow.svg" alt="" />
          </a>
        </div>

        <div className="story-image story-image--create" />
      </section>

      <section className="story-section story-section--image-left">
        <div className="story-image story-image--beautiful" />

        <div className="story-content">
          <h1>BEAUTIFUL STORIES EVERY TIME</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>

          <a className="text-link" href="/stories">
            View the stories
            <img src="/shared/desktop/arrow.svg" alt="" />
          </a>
        </div>
      </section>

      <section className="story-section">
        <div className="story-content">
          <h1>DESIGNED FOR EVERYONE</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses, you name it.
          </p>

          <a className="text-link" href="/stories">
            View the stories
            <img src="/shared/desktop/arrow.svg" alt="" />
          </a>
        </div>

        <div className="story-image story-image--designed" />
      </section>
    </>
  )
}

export default HeroSection
