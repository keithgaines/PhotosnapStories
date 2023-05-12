import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HeroSection from 'src/components/HeroSection/HeroSection'
import { InfoSectionHome } from 'src/components/InfoSection/InfoSection'
import ImageComponent from 'src/components/ImageCard/ImageCard'

import '../../index.css'
import '../../imagecard.css'
import '../../footer.css'


const imageData = [
  {
    date: 'April 16th, 2020',
    title: 'The Mountains',
    artist: 'John Appleseeed',
    backgroundImageSrc: '/stories/mobile/mountains.jpg'
  },
  {
    date: 'April 14th, 2020',
    title: 'Sunset Cityscapes',
    artist: 'Benjamin Cruz',
    backgroundImageSrc: '/stories/mobile/cityscapes.jpg'
  },

  {
    date: '  April 11th 2020',
    title: ' 18 Days Voyage',
    artist: 'Alexei Borodin',
    backgroundImageSrc: '/stories/mobile/18-days-voyage.jpg'
  },

  {
    date: 'April 9th 2020',
    title: 'Architecturals',
    artist: 'Samantha Brooke',
    backgroundImageSrc: '/stories/mobile/architecturals.jpg'
  }
 
];


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className='headercontainer'>
        <HeroSection />
      </div>
      <div className='images'>
      {imageData.map((image, index) => (
          <ImageComponent
            key={index}
            date={''}
            title={image.title}
            artist={image.artist}
            backgroundImageSrc={image.backgroundImageSrc}
          />
        ))}
        </div>
      <InfoSectionHome />
    </>
  );
}

export default HomePage;