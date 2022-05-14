import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function Navigation() {
  return (
    <Navbar>
      <Button buttonContents={'home'} />
    </Navbar>
  );
}

const Navbar = styled.div`
  z-index: 1;
  justify-content: space-between;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: #31237b;
  width: 100vw;
  height: 75px;
  bottom: 0;
  position: fixed;
`;
