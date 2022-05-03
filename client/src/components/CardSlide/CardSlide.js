import styled from 'styled-components';

export default function CardSlide() {

    // Test images
    const exampleCollection = [
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "hans" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "peter" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Gunther" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Dieter" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Karl" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Rolf" },
      ];

    return (
        
        <ContainerCardSlide>
        {exampleCollection.map((nftImage, index) => (
            <SliderItem key={index}>
              <SliderImage src={nftImage.image}/>
            </SliderItem> 
        ))}
        </ContainerCardSlide>
    )
}

const ContainerCardSlide = styled.div`

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