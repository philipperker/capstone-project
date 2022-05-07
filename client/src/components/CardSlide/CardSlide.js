import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function CardSlide() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // https://capstone-test-api.vercel.app/
    //https://capstone-test-42gsjahq5-philipperker.vercel.app/
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
          <SliderImage src={nftMetadata.image} alt={nftMetadata.token_id} />
        </SliderItem>
      ))}
    </ContainerCardSlide>
  );
}

const ContainerCardSlide = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: 100%;
  height: auto;
  white-space: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none; /* chrome ok / work not in Firefox and ios*/
  }
`;

const SliderItem = styled.div`
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
