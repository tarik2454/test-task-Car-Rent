import React from 'react';
import { GlobalStyledNavLink } from 'styles/GlobalStyle';

export const Home = () => {
  return (
    <div style={{ heigth: '100vh', display: 'flex', flexDirection: 'column' }}>
      <GlobalStyledNavLink to="/">Номе</GlobalStyledNavLink>
      <GlobalStyledNavLink to="/catalog">Catalog</GlobalStyledNavLink>
      <GlobalStyledNavLink to="/favorites">Favorites</GlobalStyledNavLink>
    </div>
  );
};
