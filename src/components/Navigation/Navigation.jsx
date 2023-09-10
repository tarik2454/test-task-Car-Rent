import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledLogo,
  StyledNavList,
  StyledNavigation,
} from './Navigation.styled';
import { GlobalStyledLink, GlobalStyledNavLink } from 'styles/GlobalStyle';
import logo from '../../images/icons8.png';

export const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavigation>
      <GlobalStyledLink to="/">
        <StyledLogo src={logo} width="40px" height="40px" alt="Car" />
      </GlobalStyledLink>

      <StyledNavList>
        <li>
          <GlobalStyledNavLink
            $fontSize="17px"
            to="/"
            state={{ from: location }}
          >
            Номе
          </GlobalStyledNavLink>
        </li>
        <li>
          <GlobalStyledNavLink
            $fontSize="17px"
            to="/catalog"
            state={{ from: location }}
          >
            Catalog
          </GlobalStyledNavLink>
        </li>
        <li>
          <GlobalStyledNavLink
            $fontSize="17px"
            to="/favorites"
            state={{ from: location }}
          >
            Favorites
          </GlobalStyledNavLink>
        </li>
      </StyledNavList>
    </StyledNavigation>
  );
};
