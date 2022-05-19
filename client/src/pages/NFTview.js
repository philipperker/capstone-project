import CardSlide from '../components/CardSlide/CardSlide';
import Navigation from '../components/Navigation/Navigation';
import styled from 'styled-components';

export default function NFTview() {
  return (
    <NFTviewMain>
      <CollectionNameh1 data-testid="collectionName_id_1">
        NFT Collection CGN-WEB-22-2
      </CollectionNameh1>
      <CollectionName data-testid="collectionName_id_1">
        Smart Contracts Address:
        <CollectionName2>
          0x7C198C077e86d43863Ac5851D420526A702691Ad
        </CollectionName2>
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
`;

const CollectionNameh1 = styled.h1`
  margin-left: 1rem;
  font-size: 1rem;
  color: white;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const CollectionName2 = styled.p`
  margin-left: 0.1rem;
  color: white;
  font-size: 0.7rem;
  grid-column-start: 2;
  grid-column-end: 3;
`;
