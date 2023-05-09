import React from 'react';

function FeatureSection(props) {
  return (
    <div className="container">
      <div className="containerimage">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="containerheader">
        <h2>{props.title}</h2>
      </div>
      <div className="containerbodytext">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="infosection">
      <FeatureSection
        image="/features/desktop/responsive.svg"
        alt="devices"
        title="100% Responsive"
        description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />
      <FeatureSection
        image="/features/desktop/no-limit.svg"
        alt="infinity sign"
        title="No Photo Upload Limit"
        description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <FeatureSection
        image="/features/desktop/embed.svg"
        alt="embed"
        title="Available to Embed"
        description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
      />
    </div>
  );
}

export default InfoSection;
