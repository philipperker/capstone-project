import CardSlide from "../components/CardSlide/CardSlide";
import styled from "styled-components";


export default function NFTview(){

    
     // first test with fake NFT-Metadata
     const exampleCollection = [
        
        { image: "https://gateway.pinata.cloud/ipfs/QmVsdFYTUsTmTBZfc5QBzYf5wxZHax2hCjCL1KhdGEG5Cr", name: "hans", },
        { image: "https://gateway.pinata.cloud/ipfs/QmZ2TMiStcFcqc7qq7mkzstRvK2sPSV9pu1LUbMMHcJp4F", name: "peter" },
        { image: "https://gateway.pinata.cloud/ipfs/QmQ4SAR1DNQBZauAAN5QbRv1AumjmGsCGEBqwMR6zUy44C", name: "Gunther" },
        { image: "https://gateway.pinata.cloud/ipfs/QmdNRUd5i7qG2QsMfswnSP39WwMJdTXXsvxv1pzNVCtQwj", name: "Dieter" },
        { image: "https://gateway.pinata.cloud/ipfs/QmenQCrnqFoM7s7sG9tJvHNVUJoHDDqie48mk7TBJfjvcs", name: "Karl" },
        { image: "https://gateway.pinata.cloud/ipfs/QmT3mHEzHfDjo9spq7SGfdUFYVBoZPPevPQVA5pm9kSeKW", name: "Rolf" },
        { image: "https://gateway.pinata.cloud/ipfs/QmZ2TMiStcFcqc7qq7mkzstRvK2sPSV9pu1LUbMMHcJp4F", name: "Kai" },
        { image: "https://gateway.pinata.cloud/ipfs/QmT3mHEzHfDjo9spq7SGfdUFYVBoZPPevPQVA5pm9kSeKW", name: "Mote" },
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


