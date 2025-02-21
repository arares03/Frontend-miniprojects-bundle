import React from 'react';
import { StyledNavigationBar, StyledUl, StyledLi, StyledLink } from './NavigationBarStyles';
import { useSelector } from 'react-redux';

const NavigationBar = () => {

  const numOfItems = useSelector((state) => state.numOfItems.numOfItems)

  return (
    <StyledNavigationBar>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/cart">Cart with CurrentNumOfItems: {numOfItems}</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavigationBar>
  );
};

export default NavigationBar;