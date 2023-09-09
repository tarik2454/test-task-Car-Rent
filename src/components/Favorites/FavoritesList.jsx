import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import { styled } from 'styled-components';
import { FavoritesItem } from './FavoritesItem';
import { GlobalStyledH1 } from 'styles/GlobalStyle';

export const FavoritesList = () => {
  const favoritesCars = useSelector(selectFavoritesCars);

  const fill = 'red';

  return (
    <>
      <GlobalStyledH1>Catalog</GlobalStyledH1>

      <StyledList>
        {favoritesCars.map((car, index) => {
          return <FavoritesItem key={index} car={car} fill={fill} />;
        })}
      </StyledList>
    </>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;
