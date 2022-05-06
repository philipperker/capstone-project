import React from 'react';
import { render, screen } from '@testing-library/react';
import NFTview from './NFTview';


it('renders App.js', () => {
  render(<NFTview/>);
  const mainElement = screen.getByRole("main")
  expect(mainElement).toBeInTheDocument();
});

it('renders App.js', () => {
    render(<NFTview/>);
    const collectionName1 = screen.getByTestId("collectionName_id_1")
    expect(collectionName1).toBeInTheDocument();
  });


  it('renders App.js', () => {
    render(<NFTview/>);
    const collectionName2 = screen.getByTestId("collectionName_id_2")
    expect(collectionName2).toBeInTheDocument();
  });

  it('renders App.js', () => {
    render(<NFTview/>);
    const collectionName3 = screen.getByTestId("collectionName_id_3")
    expect(collectionName3).toBeInTheDocument();
  });


 