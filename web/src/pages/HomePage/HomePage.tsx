import { MetaTags } from '@redwoodjs/web'

import HeroSection from 'src/components/HeroSection/HeroSection'
import { InfoSectionHome } from 'src/components/InfoSection/InfoSection'
import ImageComponent from 'src/components/ImageCard/ImageCard'

const imageData = [
  {
    date: 'April 16th, 2020',
    title: 'The Mountains',
    artist: 'John Appleseeed',
    imageClass: 'image-card--mountains',
  },
  {
    date: 'April 14th, 2020',
    title: 'Sunset Cityscapes',
    artist: 'Benjamin Cruz',
    imageClass: 'image-card--cityscapes',
  },
  {
    date: 'April 11th, 2020',
    title: '18 Days Voyage',
    artist: 'Alexei Borodin',
    imageClass: 'image-card--voyage',
  },
  {
    date: 'April 9th, 2020',
    title: 'Architecturals',
    artist: 'Samantha Brooke',
    imageClass: 'image-card--architecturals',
  },
]

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="headercontainer">
        <HeroSection />
      </div>

      <InfoSectionHome />

      <div className="images">
        {imageData.map((image, index) => (
          <ImageComponent
            key={index}
            date={image.date}
            title={image.title}
            artist={image.artist}
            imageClass={image.imageClass}
          />
        ))}
      </div>
    </>
  )
}

export default HomePage
