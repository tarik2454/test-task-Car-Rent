import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import { GlobalStyledH1 } from 'styles/GlobalStyle';
import { StyledList } from './FavoritesList.styled';
import { fetchCars } from 'redux/Cars/operation';
import { selectFilteredProducts } from 'redux/Filter/selectors';
import { FilteredCars } from 'components/FilteredCars';

export const FavoritesList = () => {
  const favoritesCars = useSelector(selectFavoritesCars);
  const filteredProducts = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const fill = 'red';

  return (
    <>
      <GlobalStyledH1>Favorites cars</GlobalStyledH1>

      {filteredProducts.length ? (
        <FilteredCars />
      ) : (
        <StyledList>
          {favoritesCars.map((car, index) => {
            return <FavoritesItem key={index} car={car} fill={fill} />;
          })}
        </StyledList>
      )}
    </>
  );
};
