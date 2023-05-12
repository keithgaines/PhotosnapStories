import { render } from '@testing-library/react';
import StoriesIntro from '../../components/StoriesIntro';

test('renders StoriesIntro component', () => {
  const { getByText } = render(<StoriesIntro />);
  
  const featuredStoryText = getByText("Last month's featured story"); 
  const title = getByText('Hazy full moon of Appalachia');

  expect(featuredStoryText).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
