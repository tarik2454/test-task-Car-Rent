import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectCurrentPage,
  selectItemsPerPage,
} from 'redux/Cars/selectors';
import { GlobalStyledH1 } from 'styles/GlobalStyle';
import CarItem from '../CarItem/CarItem';
import { fetchCars } from 'redux/Cars/operation';
import { StyledList } from './CarsList.styled';
import { selectFilteredProducts } from 'redux/Filter/selectors';
import { FilteredCars } from 'components/FilteredCars';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const itemsToDisplay = itemsPerPage * currentPage;

  const visibleItems = cars.slice(0, itemsToDisplay);

  return (
    <>
      <GlobalStyledH1>Catalog</GlobalStyledH1>

      {filteredProducts.length ? (
        <FilteredCars />
      ) : (
        <StyledList>
          {visibleItems.map((car, index) => {
            return <CarItem key={index} {...car} />;
          })}
        </StyledList>
      )}
    </>
  );
};
