import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PopUpDetailsNFT from '../PopUpDetailsNFT/PopUpDetailsNFT';

export default function CardSlide() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [isOPen, setIsOpen] = useState(false);
  const [tokenId, setNFTtokenID] = useState({});
  const [imageURL, setImageURL] = useState({});
  const [smartContact, setSmartContact] = useState({});
  const [createdBy, setCreatedBy] = useState({});

  useEffect(() => {
    const getMetadata = async () => {
      try {
        const response = await fetch(
          `https://capstone-test-fft007am3-philipperker.vercel.app/`
        );
        let data = await response.json();

        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getMetadata();
  }, []);

  return (
    <ContainerCardSlide data-testid="collectionCardSlide_id_1">
      {data.slice(0, 8).map((nftMetadata, index) => (
        <SliderItem key={index}>
          <SliderImage
            src={nftMetadata.image}
            alt={nftMetadata.token_id}
            onClick={() => (
              setIsOpen(true),
              setNFTtokenID(nftMetadata.token_id),
              setImageURL(nftMetadata.image),
              setSmartContact(nftMetadata.contract_id),
              setCreatedBy(nftMetadata.created_by)
            )}
          />
        </SliderItem>
      ))}
      <PopUpDetailsNFT
        nftTokenId={tokenId}
        nftImageUrl={imageURL}
        nftSmartContact={smartContact}
        open={isOPen}
        onClose={() => setIsOpen(false)}
        createdBy={createdBy}
      ></PopUpDetailsNFT>
    </ContainerCardSlide>
  );
}

const ContainerCardSlide = styled.ul`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: 90%;
  height: auto;
  white-space: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.li`
  display: inline-block;
  width: 150px;
  height: 150px;
  background: white;
  border: black;
  border-radius: 20px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const SliderImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;
