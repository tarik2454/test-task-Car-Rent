import React from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const Navigation = () => {
  const location = useLocation();

  return (
    <div style={{ heigth: '100vh', display: 'flex', flexDirection: 'column' }}>
      <GlobalStyledLink to="/" state={{ from: location }}>
        Номе
      </GlobalStyledLink>
      <GlobalStyledLink to="/catalog" state={{ from: location }}>
        Catalog
      </GlobalStyledLink>
      <GlobalStyledLink to="/favorites" state={{ from: location }}>
        Favorites
      </GlobalStyledLink>
    </div>
  );
};
