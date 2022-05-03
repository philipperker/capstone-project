import CardSlide from "../components/CardSlide/CardSlide";
import styled from "styled-components";
// import { useState } from "react";

export default function NFTview(){

    
     // test NFT-Metadata
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
        <p>Collection: lorem....</p>
        <CardSlide nft={exampleCollection}/>
        <p>Collection: lorem....</p>
        <CardSlide nft={exampleCollection}/>
        <p>Collection: lorem....</p>
        <CardSlide nft={exampleCollection}/>
        
        </NFTviewMain>
        
        
    )
}

const NFTviewMain = styled.main`
background-color: blue;

;
`


