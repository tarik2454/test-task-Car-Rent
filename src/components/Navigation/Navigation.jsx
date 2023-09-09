import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavigation>
      <NavList>
        <li>
          <GlobalStyledLink $fontSize="17px" to="/" state={{ from: location }}>
            Номе
          </GlobalStyledLink>
        </li>
        <li>
          <GlobalStyledLink
            $fontSize="17px"
            to="/catalog"
            state={{ from: location }}
          >
            Catalog
          </GlobalStyledLink>
        </li>
        <li>
          <GlobalStyledLink
            $fontSize="17px"
            to="/favorites"
            state={{ from: location }}
          >
            Favorites
          </GlobalStyledLink>
        </li>
      </NavList>
    </StyledNavigation>
  );
};

export const StyledNavigation = styled.nav`
  margin-top: 15px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
