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

function InfoSectionHome() {
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

function InfoSectionFeatures() {
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
      <FeatureSection
        image="/features/desktop/custom-domain.svg"
        alt="domain"
        title="Custom Domain"
        description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
      />
      <FeatureSection
        image="/features/desktop/boost-exposure.svg"
        alt="boost"
        title="Boost Your Exposure"
        description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
      />
      <FeatureSection
        image="/features/desktop/drag-drop.svg"
        alt="dragndrop"
        title="Drag & Drop Image"
        description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
      />
    </div>
  )
}

export { InfoSectionHome, InfoSectionFeatures } ;
