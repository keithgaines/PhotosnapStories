import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders MetaTags component with correct props', () => {
  render(<App />);
  
  const homePageText = screen.getByText((content) => {
    const normalizedText = content.replace(/\s+/g, ' ').trim();
    return normalizedText === 'CREATE AND SHARE YOUR PHOTO STORIES.';
  });

  expect(homePageText).toBeInTheDocument();
});
