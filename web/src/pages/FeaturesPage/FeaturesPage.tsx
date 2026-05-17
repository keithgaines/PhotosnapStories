import { MetaTags } from '@redwoodjs/web'

import Intro from 'src/components/Intro/Intro'
import { InfoSectionFeatures } from 'src/components/InfoSection/InfoSection'

const FeaturesPage = () => {
  return (
    <>
      <MetaTags title="Features" description="Features page" />

      <Intro
        title="Features"
        description="We make sure all of our features are designed to be loved by every aspiring and professional photographer who wants to share their stories."
      />

      <InfoSectionFeatures />
    </>
  )
}

export default FeaturesPage
