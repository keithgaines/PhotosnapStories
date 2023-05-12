import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

jest.mock('@redwoodjs/web', () => ({
  MetaTags: () => null, // Mock the MetaTags component
}));

describe('HomePage', () => {
  it('renders without errors', () => {
    render(<HomePage />);
  });

  it('renders MetaTags with correct title and description', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Home page')).toBeInTheDocument();
  });

  it('renders HeroSection component', () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders ImageComponent for each item in imageData', () => {
    const { getAllByTestId } = render(<HomePage />);
    const imageComponents = getAllByTestId('image-component');
    expect(imageComponents.length).toBe(imageData.length);
  });

  it('renders InfoSectionHome component', () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId('info-section-home')).toBeInTheDocument();
  });
});
