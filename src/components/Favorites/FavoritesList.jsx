import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import { GlobalStyledH1 } from 'styles/GlobalStyle';
import { StyledList } from './FavoritesList.styled';
import { fetchCars } from 'redux/Cars/operation';

export const FavoritesList = () => {
  const favoritesCars = useSelector(selectFavoritesCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const fill = 'red';

  return (
    <>
      <GlobalStyledH1>Favorites cars</GlobalStyledH1>

      <StyledList>
        {favoritesCars.map((car, index) => {
          return <FavoritesItem key={index} car={car} fill={fill} />;
        })}
      </StyledList>
    </>
  );
};
