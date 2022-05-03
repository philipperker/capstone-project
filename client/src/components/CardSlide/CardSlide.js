import styled from 'styled-components';

export default function CardSlide(props) {


     return (
        
        <ContainerCardSlide>
        {props.nft.map((nftMetadata, index) => (
            <SliderItem key={index}>
              <SliderImage src={nftMetadata.image} alt={nftMetadata.name}/>
            </SliderItem> 
        ))}
        </ContainerCardSlide>
    )
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
    display: none;              /* chrome ok / work not in Firefox and ios*/          
  }
`;

const SliderItem = styled.div`
  display: inline-block;
  width: 150px;
  height: auto;
  background: white;
  border:  black;
  border-radius: 20px;
  margin-left: 0.5rem;
  margin-right: 0.5rem; 
`;

const SliderImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
`;