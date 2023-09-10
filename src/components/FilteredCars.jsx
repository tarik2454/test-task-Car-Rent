import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProducts,
  selectFilteredProductsPrice,
  selectFilterValue,
} from 'redux/Filter/selectors';
import CarItem from './CarItem/CarItem';
import { StyledList } from './CarsList/CarsList.styled';
import styled from 'styled-components';
import { clearFilter } from 'redux/Filter/filterSlice';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const FilteredCars = () => {
  const dispatch = useDispatch(); // Получите диспетчер Redux
  const filteredProducts = useSelector(selectFilteredProducts);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);
  const filterValue = useSelector(selectFilterValue);
  const hasFilterValue = Boolean(filterValue);

  const matchingProducts = filteredProducts.filter(product => {
    return filteredProductsPrice.some(
      priceProduct => priceProduct.id === product.id
    );
  });

  const itemsDisplayed = matchingProducts.length;

  const handleResetFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <>
      <StyledList>
        {hasFilterValue && itemsDisplayed > 0 ? (
          matchingProducts.map((product, index) => (
            <CarItem key={index} {...product} />
          ))
        ) : (
          <StyledMessage>
            Not found
            <br />
            <br />
            <GlobalStyledLink $fontSize="17px" onClick={handleResetFilter}>
              Reset Filter
            </GlobalStyledLink>
          </StyledMessage>
        )}
      </StyledList>
    </>
  );
};

export const StyledMessage = styled.p`
  width: 100%;
  margin-top: 70px;
  text-align: center;
`;
