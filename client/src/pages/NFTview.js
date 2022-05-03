import CardSlide from "../components/CardSlide/CardSlide";
import styled from "styled-components";


export default function NFTview(){

    
     // first test with fake NFT-Metadata
     const exampleCollection = [
        
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "hans", collection: "super" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "peter" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Gunther" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Dieter" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Karl" },
        { image: "https://ipfs.io/ipfs/QmR9uR6ufPnTrz2eFVrhgESEaU47Y7F4UE5pYorHNYR9XF", name: "Rolf" },
      ];


    return (
        
        <NFTviewMain>
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide nft={exampleCollection}/>
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide nft={exampleCollection}/>
           <CollectionName>NFT Collection: lorem....</CollectionName>
           <CardSlide nft={exampleCollection}/>
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


