import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { InfoSectionFeatures } from 'src/components/InfoSection/InfoSection'

import '../../features.css'

const FeaturesPage = () => {
  return (
    <>
      <MetaTags title="Features" description="Features page" />
      <InfoSectionFeatures />
    </>
  )
}

export default FeaturesPage
