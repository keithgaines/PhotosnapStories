import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Intro from 'src/components/Intro/Intro'
import { InfoSectionFeatures } from 'src/components/InfoSection/InfoSection'

import '../../features.css'

const FeaturesPage = () => {
  return (
    <>
      <MetaTags title="Features" description="Features page" />
      <Intro 
      title="Features"
      description="We make sure all of our features are designed to be loved by every aspiring and even
      professional photograpers who wanted to share their stories." />
      <InfoSectionFeatures />
    </>
  )
}

export default FeaturesPage
