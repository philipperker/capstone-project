import React from 'react';
import styled from 'styled-components';

export default function Navigation() {
  return <Navbar></Navbar>;
}

const Navbar = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: red;
  width: 100vw;
  height: 100px;
  bottom: 0;
  position: fixed;
`;

const Button = styled.button`
  border-radius: 50%;
  margin: 0.5rem;
  width: 80px;
  height: 80px;
`;
