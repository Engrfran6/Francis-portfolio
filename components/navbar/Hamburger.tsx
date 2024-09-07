import React from 'react';
import styled from 'styled-components';

export interface StateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledBurger = styled.div<StateProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  z-index: 1000;
  display: none;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Hamburger = ({open, setOpen}: StateProps) => {
  return (
    <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Hamburger;
