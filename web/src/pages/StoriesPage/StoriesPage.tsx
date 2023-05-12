import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import StoriesIntro from 'src/components/StoriesIntro/StoriesIntro'
import ImageComponent from 'src/components/ImageCard/ImageCard'

import '../../stories.css'
import '../../imagecard.css'

const imageData = [
  {
    date: 'April 16th, 2020',
    title: 'The Mountains',
    artist: 'John Appleseeed',
    backgroundImageSrc: '/stories/mobile/mountains.jpg'
  },
  {
    date: 'April 14th, 2020',
    title: 'Sunset Cityscapes',
    artist: 'Benjamin Cruz',
    backgroundImageSrc: '/stories/mobile/cityscapes.jpg'
  },

  {
    date: '  April 11th 2020',
    title: ' 18 Days Voyage',
    artist: 'Alexei Borodin',
    backgroundImageSrc: '/stories/mobile/18-days-voyage.jpg'
  },

  {
    date: 'April 9th 2020',
    title: 'Architecturals',
    artist: 'Samantha Brooke',
    backgroundImageSrc: '/stories/mobile/architecturals.jpg'
  },

  {
    date: '  April 7th 2020',
    title: 'World Tour 2019',
    artist: 'Timothy Wagner',
    backgroundImageSrc: '/stories/mobile/world-tour.jpg'
  },

  {
    date: 'April 3rd 2020',
    title: 'Unforeseen Corners',
    artist: 'William Malcolm',
    backgroundImageSrc: '/stories/mobile/unforeseen-corners.jpg'
  },

  {
    date: 'March 29th 2020',
    title: 'King on Africa: Part II',
    artist: 'Tim Hillenburg',
    backgroundImageSrc: '/stories/mobile/king-on-africa.jpg'
  },

  {
    date: 'March 21st 2020',
    title: 'The Trip to Nowhere',
    artist: 'Felicia Rourke',
    backgroundImageSrc: '/stories/mobile/trip-to-nowhere.jpg'
  },

  {
    date: 'March 19th 2020',
    title: 'Rage of The Sea',
    artist: 'Mohammed Abdul',
    backgroundImageSrc: '/stories/mobile/rage-of-the-sea.jpg'
  },

  {
    date: 'March 16th 2020',
    title: 'Running Free',
    artist: 'Michelle',
    backgroundImageSrc: '/stories/mobile/running-free.jpg'
  },

  {
    date: 'March 11th 2020',
    title: 'Behind the Waves',
    artist: 'Lamarr Wilson',
    backgroundImageSrc: '/stories/mobile/behind-the-waves.jpg'
  },

  {
    date: 'March 9th 2020',
    title: 'Calm Waters',
    artist: 'Samantha Brooke',
    backgroundImageSrc: '/stories/mobile/calm-waters.jpg'
  },

  {
    date: 'March 5th 2020',
    title: 'The Milky Way',
    artist: 'Benjamin Cruz',
    backgroundImageSrc: '/stories/mobile/milky-way.jpg'
  },

  {
    date: 'March 4th 2020',
    title: 'Night at The Dark Forest',
    artist: 'Mohammed Abdul',
    backgroundImageSrc: '/stories/mobile/dark-forest.jpg'
  },

  {
    date: 'March 1st 2020',
    title: "Somwarpet’s Beauty",
    artist: 'Michelle',
    backgroundImageSrc: '/stories/mobile/somwarpet.jpg'
  },

  {
    date: 'February 25th 2020',
    title: 'Land of Dreams',
    artist: 'William Malcolm',
    backgroundImageSrc: '/stories/mobile/land-of-dreams.jpg'
  },

 
];

const StoriesPage = () => {
  return (
    <>
      <MetaTags title="Stories" description="Stories page" />
      <StoriesIntro />
      <div className='images'>
        {imageData.map((image, index) => (
          <ImageComponent
            key={index}
            date={image.date}
            title={image.title}
            artist={image.artist}
            backgroundImageSrc={image.backgroundImageSrc}
          />
        ))}
      </div>
    </>
  );
};

export default StoriesPage;
