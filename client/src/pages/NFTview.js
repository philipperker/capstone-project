import CardSlide from "../components/CardSlide/CardSlide";
import styled from "styled-components";



export default function NFTview(){

  
      
    return (
        
        <NFTviewMain>
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide />
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide />
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide />
        </NFTviewMain>
        
        
    )
}

const NFTviewMain = styled.main`
display: grid;
grid-template-columns:1fr auto 1fr;
grid-template-rows:  auto;
;
`
const CollectionName = styled.p`
margin-left: 1rem;
color: white;
grid-column-start: 2;
grid-column-end: 3;
justify-self: start;
`


