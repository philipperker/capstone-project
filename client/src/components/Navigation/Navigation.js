import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar>
      <NavLinkStyle to="/">
        <Content>home</Content>
      </NavLinkStyle>
      <NavLinkStyle to="/add">
        <Content>add</Content>
      </NavLinkStyle>
    </Navbar>
  );
}

const Navbar = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: #31237b;
  width: 100vw;
  height: 85px;
  bottom: 0;
  position: fixed;
`;

const NavLinkStyle = styled(NavLink)`
  background-color: #9f7ce8;
  border-radius: 100%;
  border: 5px solid #741df6;
  width: 70px;
  height: 70px;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 0.2rem;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
  &.active {
    background-color: #5a35ab;
    border: 5px solid #22ca51;
  }
`;

const Content = styled.div`
  color: white;
  margin-top: 26px;
`;
