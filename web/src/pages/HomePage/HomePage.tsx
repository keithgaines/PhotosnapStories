import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Header from 'src/components/Navbar/Navbar'
import HeroSection from 'src/components/HeroSection/HeroSection'
import InfoSection from 'src/components/InfoSection/InfoSection'

import '../../index.css'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <HeroSection />
      <InfoSection />
    </>
  )
}

export default HomePage
