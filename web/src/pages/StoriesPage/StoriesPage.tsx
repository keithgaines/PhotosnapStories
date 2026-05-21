import { MetaTags } from '@redwoodjs/web'

import ImageCard from 'src/components/ImageCard/ImageCard'
import StoriesIntro from 'src/components/StoriesIntro/StoriesIntro'

const stories = [
  {
    date: 'April 16th, 2020',
    title: 'The Mountains',
    artist: 'John Appleseed',
    imageClass: 'image-card--mountains',
  },
  {
    date: 'April 14th, 2020',
    title: 'Sunset Cityscapes',
    artist: 'Benjamin Cruz',
    imageClass: 'image-card--cityscapes',
  },
  {
    date: 'April 11th, 2020',
    title: '18 Days Voyage',
    artist: 'Alexei Borodin',
    imageClass: 'image-card--voyage',
  },
  {
    date: 'April 9th, 2020',
    title: 'Architecturals',
    artist: 'Samantha Brooke',
    imageClass: 'image-card--architecturals',
  },
  {
    date: 'April 7th, 2020',
    title: 'World Tour 2019',
    artist: 'Timothy Wagner',
    imageClass: 'image-card--world-tour',
  },
  {
    date: 'April 3rd, 2020',
    title: 'Unforeseen Corners',
    artist: 'William Malcolm',
    imageClass: 'image-card--unforeseen-corners',
  },
  {
    date: 'March 29th, 2020',
    title: 'King on Africa: Part II',
    artist: 'Tim Hillenburg',
    imageClass: 'image-card--king-on-africa',
  },
  {
    date: 'March 21st, 2020',
    title: 'The Trip to Nowhere',
    artist: 'Felicia Rourke',
    imageClass: 'image-card--trip-to-nowhere',
  },
  {
    date: 'March 19th, 2020',
    title: 'Rage of The Sea',
    artist: 'Mohammed Abdul',
    imageClass: 'image-card--rage-of-the-sea',
  },
  {
    date: 'March 16th, 2020',
    title: 'Running Free',
    artist: 'Michelle',
    imageClass: 'image-card--running-free',
  },
  {
    date: 'March 11th, 2020',
    title: 'Behind the Waves',
    artist: 'Lamarr Wilson',
    imageClass: 'image-card--behind-the-waves',
  },
  {
    date: 'March 9th, 2020',
    title: 'Calm Waters',
    artist: 'Samantha Brooke',
    imageClass: 'image-card--calm-waters',
  },
  {
    date: 'March 5th, 2020',
    title: 'The Milky Way',
    artist: 'Benjamin Cruz',
    imageClass: 'image-card--milky-way',
  },
  {
    date: 'March 4th, 2020',
    title: 'Night at The Dark Forest',
    artist: 'Mohammed Abdul',
    imageClass: 'image-card--dark-forest',
  },
  {
    date: 'March 1st, 2020',
    title: 'Somwarpet’s Beauty',
    artist: 'Michelle',
    imageClass: 'image-card--somwarpet',
  },
  {
    date: 'February 25th, 2020',
    title: 'Land of Dreams',
    artist: 'William Malcolm',
    imageClass: 'image-card--land-of-dreams',
  },
]

const StoriesPage = () => {
  return (
    <>
      <MetaTags title="Stories" description="Stories page" />

      <StoriesIntro />

      <section className="stories-grid" aria-label="Photo stories">
        {stories.map((story) => (
          <ImageCard
            key={`${story.title}-${story.date}`}
            date={story.date}
            title={story.title}
            artist={story.artist}
            imageClass={story.imageClass}
          />
        ))}
      </section>
    </>
  )
}

export default StoriesPage
