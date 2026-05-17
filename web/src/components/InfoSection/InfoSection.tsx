import React from 'react'

interface Feature {
  image: string
  alt: string
  title: string
  description: string
}

const homeFeatures: Feature[] = [
  {
    image: '/features/desktop/responsive.svg',
    alt: 'Devices',
    title: '100% Responsive',
    description:
      'No matter which device you’re on, our site is fully responsive and stories look beautiful on any screen.',
  },
  {
    image: '/features/desktop/no-limit.svg',
    alt: 'Infinity sign',
    title: 'No Photo Upload Limit',
    description:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    image: '/features/desktop/embed.svg',
    alt: 'Embed icon',
    title: 'Available to Embed',
    description:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
]

const additionalFeatures: Feature[] = [
  {
    image: '/features/desktop/custom-domain.svg',
    alt: 'Domain icon',
    title: 'Custom Domain',
    description:
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding.',
  },
  {
    image: '/features/desktop/boost-exposure.svg',
    alt: 'Exposure boost icon',
    title: 'Boost Your Exposure',
    description:
      'Users who viewed your story or gallery can get notified of new and featured stories with our built-in mailing list.',
  },
  {
    image: '/features/desktop/drag-drop.svg',
    alt: 'Drag and drop icon',
    title: 'Drag & Drop Image',
    description:
      'Easily drag and drop your image and get beautiful shots every time. No over-the-top tooling to add friction to creating stories.',
  },
]

const FeatureSection = ({ image, alt, title, description }: Feature) => {
  return (
    <article className="feature-card">
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

const InfoSection = ({ features }: { features: Feature[] }) => {
  return (
    <section className="infosection">
      {features.map((feature) => (
        <FeatureSection key={feature.title} {...feature} />
      ))}
    </section>
  )
}

const InfoSectionHome = () => <InfoSection features={homeFeatures} />

const InfoSectionFeatures = () => (
  <InfoSection features={[...homeFeatures, ...additionalFeatures]} />
)

export { InfoSectionHome, InfoSectionFeatures }
