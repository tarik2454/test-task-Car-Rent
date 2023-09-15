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
import { FilterCars } from 'components/FilterCars';
import {
  selectFilteredProductsBrand,
  selectFilteredProductsPrice,
} from 'redux/Filter/selectors';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filteredProductsBrand = useSelector(selectFilteredProductsBrand);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const itemsToDisplay = itemsPerPage * currentPage;

  const visibleItems = cars.slice(0, itemsToDisplay);

  return (
    <>
      <GlobalStyledH1>Catalog</GlobalStyledH1>

      {filteredProductsBrand.length || filteredProductsPrice.length ? (
        <FilterCars />
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
