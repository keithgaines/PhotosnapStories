import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Intro from 'src/components/Intro/Intro'
import HeroSection from 'src/components/HeroSection/HeroSection'
import { InfoSectionHome } from 'src/components/InfoSection/InfoSection'
import ImageComponent from 'src/components/ImageCard/ImageCard'
import Footer from 'src/components/Footer/Footer'

import '../../index.css'
import '../../imagecard.css'
import '../../footer.css'



const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className='headercontainer'>
      <HeroSection />
      </div>
      <div className='images'>
      <ImageComponent 
        title='The Mountains' 
        artist='John Appleseed' 
        backgroundImageSrc='/stories/mobile/mountains.jpg'
      />
      <ImageComponent 
        title='Sunset Cityscapes' 
        artist='Benjamin Cruz' 
        backgroundImageSrc='/stories/mobile/cityscapes.jpg'
      />
      <ImageComponent 
        title='18 Days Voyage' 
        artist='Alexei Borodin' 
        backgroundImageSrc='/stories/mobile/18-days-voyage.jpg'
      />
      <ImageComponent 
        title='Architecturals' 
        artist='Samantha Brooke' 
        backgroundImageSrc='/stories/mobile/architecturals.jpg'
      />
      </div>
      <InfoSectionHome />
    </>
  )
}

export default HomePage
