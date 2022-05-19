import CardSlide from '../components/CardSlide/CardSlide';
import Navigation from '../components/Navigation/Navigation';
import styled from 'styled-components';

export default function NFTview() {
  return (
    <NFTviewMain>
      <CollectionName data-testid="collectionName_id_1">
        My NFT Collection
      </CollectionName>
      <CardSlide />
      {/* <CollectionName data-testid="collectionName_id_2">
        NFT Collection: lorem....
      </CollectionName>
      <CardSlide /> */}

      <Navigation />
    </NFTviewMain>
  );
}

const NFTviewMain = styled.main`
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
`;
const CollectionName = styled.p`
  margin-left: 1rem;
  color: white;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: start;
`;
