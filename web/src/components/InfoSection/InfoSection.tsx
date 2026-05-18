import React from 'react'

const homeFeatures = [
  {
    icon: '/features/desktop/responsive.svg',
    alt: 'Devices',
    title: '100% Responsive',
    description:
      'No matter which device you’re on, our site is fully responsive and stories look beautiful on any screen.',
  },
  {
    icon: '/features/desktop/no-limit.svg',
    alt: 'Infinity sign',
    title: 'No Photo Upload Limit',
    description:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    icon: '/features/desktop/embed.svg',
    alt: 'Embed icon',
    title: 'Available to Embed',
    description:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
]

const allFeatures = [
  ...homeFeatures,
  {
    icon: '/features/desktop/custom-domain.svg',
    alt: '',
    title: 'Custom Domain',
    description:
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding.',
  },
  {
    icon: '/features/desktop/boost-exposure.svg',
    alt: '',
    title: 'Boost Your Exposure',
    description:
      'Users that viewed your story or gallery can easily get notified of new and featured stories with our built-in mailing list.',
  },
  {
    icon: '/features/desktop/drag-drop.svg',
    alt: '',
    title: 'Drag & Drop Image',
    description:
      'Easily drag and drop your image and get beautiful shots every time. No over-the-top tooling required.',
  },
]

const FeatureGrid = ({ features }) => {
  return (
    <section className="infosection">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <img src={feature.icon} alt={feature.alt} />
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}

export const InfoSectionHome = () => {
  return <FeatureGrid features={homeFeatures} />
}

export const InfoSectionFeatures = () => {
  return <FeatureGrid features={allFeatures} />
}
