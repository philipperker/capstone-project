import React from 'react';
import styled from 'styled-components';

export default function PopUpDetailsNFT({
  open,
  nftTokenId,
  nftImageUrl,
  onClose,
  createdBy,
}) {
  if (!open) return null;

  return (
    <PopUp onClick={onClose}>
      <Image src={nftImageUrl}></Image>
      <Content>Created by: {createdBy}</Content>
      <Content>ID: {nftTokenId}</Content>
      <Content></Content>
    </PopUp>
  );
}

const PopUp = styled.div`
  min-width: 90vw;
  max-width: 90vw;
  min-height: 95vh;
  z-index: 1000;
  position: fixed;
  top: 4%;
  left: 5%;
  background: #7728b5;
  border: black;
  border-radius: 30px;
`;

const Content = styled.p`
  color: white;
  margin-left: 3rem;
`;

const Image = styled.img`
  margin-left: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 250px;
  height: 250px;
  border-radius: 20px;
`;
