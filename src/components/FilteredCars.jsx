import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProductsBrand,
  selectFilteredProductsPrice,
  selectFilterValueBrand,
  selectFilterValuePrices,
} from 'redux/Filter/selectors';
import CarItem from './CarItem/CarItem';
import { StyledList } from './CarsList/CarsList.styled';
import styled from 'styled-components';
import { clearFilter } from 'redux/Filter/filterSlice'; // Импортируйте ваши экшены
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const FilteredCars = () => {
  const dispatch = useDispatch();
  const filterValueBrand = useSelector(selectFilterValueBrand);
  const filteredProductsBrand = useSelector(selectFilteredProductsBrand);
  const filterValuePrices = useSelector(selectFilterValuePrices);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);

  console.log(filterValuePrices);
  console.log(filteredProductsPrice);

  const handleResetFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <>
      <StyledList>
        {filterValueBrand && filterValuePrices ? (
          filteredProductsBrand.length > 0 &&
          filteredProductsPrice.length > 0 ? (
            filteredProductsBrand.map(
              (product, index) =>
                filteredProductsPrice.some(
                  priceProduct => priceProduct.id === product.id
                ) && <CarItem key={index} {...product} />
            )
          ) : (
            <StyledMessage>
              Not found
              <br />
              <br />
              <GlobalStyledLink $fontSize="17px" onClick={handleResetFilter}>
                Reset Filter
              </GlobalStyledLink>
            </StyledMessage>
          )
        ) : filterValueBrand ? (
          filteredProductsBrand.length > 0 ? (
            filteredProductsBrand.map((product, index) => (
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
          )
        ) : filterValuePrices ? (
          filteredProductsPrice.length > 0 ? (
            filteredProductsPrice.map((product, index) => (
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
          )
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
