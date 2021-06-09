/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';


import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogMenu 
        isOpen={isOpen}
        onDismiss={onDismiss}>
      <DialogContentMenu aria-label="Content Menu">
      <CloseButton  onClick={onDismiss}>
          <Icon id="close"></Icon>
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>
        <Filler/>
        <NavMenu>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavMenu>
        <Filler>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
        </Filler>
      </DialogContentMenu>
    </DialogMenu>
  );
};

const Filler = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
`
const DialogMenu = styled(DialogOverlay)`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color:hsla(var(--color-gray-700-data) / 0.8);

`
const DialogContentMenu = styled(DialogContent)`
  position:absolute;
  height: 100%;
  width: 80%;
  top:0;
  right:0;
  background-color:white;
  display:flex;
  flex-direction:column;
  padding:32px;
  justify-content:center;
`

const CloseButton = styled(UnstyledButton)`
  position:absolute;
  top:26px;
  right:16px;
`

const Footer = styled.footer`
  display:flex;
  flex-direction:column;
  gap:14px;
  a {
    font-size: ${14/16}rem;
    color:var(--gray-700);
    text-decoration:none;
    font-weight: var-(--weight-normal);
    
    &:hover{
      color:black;
    }

`

const NavMenu = styled.nav`
  display:flex;
  flex-direction:column;
  gap:22px;
  a {
    font-size: ${18/16}rem;
    color:var(--color-gray-900);
    text-decoration:none;
    font-weight: var(--weight-medium);
    text-transform: uppercase;


    &:hover{
      color:var(--color-secondary)
    }
  }
`


export default MobileMenu;
