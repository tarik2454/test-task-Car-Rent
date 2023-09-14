import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProductsBrand,
  selectFilteredProductsPrice,
  selectFilterValueBrand,
  selectFilterValuePrices,
  selectSearchButton,
} from 'redux/Filter/selectors';
import CarItem from './CarItem/CarItem';
import { StyledList } from './CarsList/CarsList.styled';
import styled from 'styled-components';
import { clearFilter } from 'redux/Filter/filterSlice';
import { FilterMessage } from './FilterMessage';

export const FilteredCars = () => {
  const dispatch = useDispatch();
  const filterValueBrand = useSelector(selectFilterValueBrand);
  const filteredProductsBrand = useSelector(selectFilteredProductsBrand);
  const filterValuePrices = useSelector(selectFilterValuePrices);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);
  const searchButton = useSelector(selectSearchButton);
  console.log(searchButton);

  console.log(filterValuePrices);
  console.log(filteredProductsPrice);

  const handleResetFilter = () => {
    dispatch(clearFilter());
    // setSearchClicked(false); // Сбрасываем флаг при сбросе фильтра
  };

  return (
    <>
      <StyledList>
        {filterValueBrand && filterValuePrices ? (
          filteredProductsBrand.length > 0 &&
          filteredProductsPrice.length > 0 ? (
            filteredProductsBrand.map((product, index) => {
              console.log(product);
              return (
                filteredProductsPrice.some(
                  priceProduct => priceProduct.id === product.id
                ) && <CarItem key={index} {...product} />
              );
            })
          ) : (
            <FilterMessage handleResetFilter={handleResetFilter} />
          )
        ) : filterValueBrand ? (
          filteredProductsBrand.length > 0 ? (
            filteredProductsBrand.map((product, index) => (
              <CarItem key={index} {...product} />
            ))
          ) : (
            <FilterMessage handleResetFilter={handleResetFilter} />
          )
        ) : filteredProductsBrand > 0 || filterValuePrices ? (
          filteredProductsPrice.length > 0 ? (
            filteredProductsPrice.map((product, index) => (
              <CarItem key={index} {...product} />
            ))
          ) : (
            <FilterMessage handleResetFilter={handleResetFilter} />
          )
        ) : (
          <FilterMessage handleResetFilter={handleResetFilter} />
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
