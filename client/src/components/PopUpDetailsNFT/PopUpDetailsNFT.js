import React from 'react';
import styled from 'styled-components';

export default function PopUpDetailsNFT({
  open,
  nftTokenId,
  nftImageUrl,
  nftSmartContact,
  onClose,
}) {
  console.log(nftTokenId);
  console.log(nftImageUrl);

  if (!open) return null;

  return (
    <PopUp onClick={onClose}>
      <Image src={nftImageUrl}></Image>
      <Content>Token-ID: {nftTokenId}</Content>
      <Content>Smart Contact: </Content>
      {/* <Content>{nftSmartContact}</Content> */}
    </PopUp>
  );
}

const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 90vw;
  max-width: 90vw;
  min-height: 95vh;
  z-index: 1000;
  position: fixed;
  top: 20px;
  background: #7728b5;
  border: black;
  border-radius: 30px;
`;

const Content = styled.div`
  color: white;
  margin-left: 3rem;
`;

const Image = styled.img`
  margin-left: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;
