import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App.js', () => {
  render(<App />);
  const mainElement = screen.getByRole("main")
  expect(mainElement).toBeInTheDocument();
});

