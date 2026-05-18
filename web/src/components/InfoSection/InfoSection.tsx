import React from 'react'

const features = [
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

export const InfoSectionHome = () => {
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
export const InfoSectionFeatures = InfoSectionHome
