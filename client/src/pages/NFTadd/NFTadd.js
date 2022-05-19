import { useState } from 'react';
import NftCard from '../../components/NFTCardCheck/NFTCardCheck';
import { fetchNFTs } from '../../useHooks/fetchNFT';
import Navigation from '../../components/Navigation/Navigation';
import styled from 'styled-components';

const Explore = () => {
  const [owner, setOwner] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [NFTs, setNFTs] = useState('');
  console.log(NFTs);
  return (
    <>
      <ContainerFlex>
        <StyleInput
          value={owner}
          onChange={e => setOwner(e.target.value)}
          placeholder="Insert your wallet address"
        ></StyleInput>

        <StyleButton
          onClick={() => {
            fetchNFTs(owner, contractAddress, setNFTs);
          }}
        >
          Search
        </StyleButton>
      </ContainerFlex>
      {NFTs ? (
        NFTs.map(NFT => {
          return (
            <NftCard
              image={NFT.media[0].gateway}
              id={NFT.id.tokenId}
              title={NFT.title}
              address={NFT.contract.address}
              description={NFT.description}
              attributes={NFT.metadata.attributes}
              external_url={NFT.metadata.external_url}
            ></NftCard>
          );
        })
      ) : (
        <div></div>
      )}
      <Testdiv></Testdiv>
      <Navigation />
    </>
  );
};

const ContainerFlex = styled.header`
  display: flex;
  flex-direction: column;
`;

const Testdiv = styled.div`
  margin-top: 100px;
`;

const StyleInput = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  width: 95%;
  height: 1.7rem;
`;

const StyleButton = styled.button`
  background-color: #31237b;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  width: 60%;
  height: 2rem;
`;

export default Explore;
