import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSlide from './CardSlide';

it('renders CardSlide', () => {
  render(<CardSlide />);
  const mainElement = screen.getByTestId('collectionCardSlide_id_1');
  expect(mainElement).toBeInTheDocument();
});
