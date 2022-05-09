import React from 'react';
import { render, screen } from '@testing-library/react';
import NFTview from './NFTview';

describe('NFTview', () => {
  it('render NTFview and text content', () => {
    render(<NFTview />);
    const collectionName1 = screen.getByTestId('collectionName_id_1');
    const collectionName2 = screen.getByTestId('collectionName_id_2');
    const collectionName3 = screen.getByTestId('collectionName_id_3');
    expect(collectionName1.textContent).toBe('NFT Collection: lorem....');
    expect(collectionName2.textContent).toBe('NFT Collection: lorem....');
    expect(collectionName3.textContent).toBe('NFT Collection: lorem....');
  });
});
