import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredProductsBrand,
  selectFilteredProductsPrice,
  selectFilterValueBrand,
  selectFilterValuePrices,
  selectIsFilterActive,
} from 'redux/Filter/selectors';
import CarItem from './CarItem/CarItem';
import { StyledList } from './CarsList/CarsList.styled';
import styled from 'styled-components';
import {
  setFilteredProductsBrand,
  setFilteredProductsPrice,
} from 'redux/Filter/filterSlice';
import { FilterMessage } from './FilterMessage';

export const FilterCars = () => {
  const dispatch = useDispatch();
  const filterValueBrand = useSelector(selectFilterValueBrand);
  const filteredProductsBrand = useSelector(selectFilteredProductsBrand);
  const filterValuePrices = useSelector(selectFilterValuePrices);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);
  const isFilterActive = useSelector(selectIsFilterActive);

  useEffect(() => {
    // Обновляем результаты фильтрации при изменении filterValueBrand или filterValuePrices,
    // только если isFilterActive установлен в true
    if (isFilterActive) {
      dispatch(setFilteredProductsBrand());
      dispatch(setFilteredProductsPrice());
    }
  }, [dispatch, filterValueBrand, filterValuePrices, isFilterActive]);

  return (
    <>
      <StyledList>
        {filterValueBrand && filterValuePrices ? (
          filteredProductsBrand.length > 0 &&
          filteredProductsPrice.length > 0 ? (
            filteredProductsBrand.map((product, index) => {
              return (
                filteredProductsPrice.some(
                  priceProduct => priceProduct.id === product.id
                ) && <CarItem key={index} {...product} />
              );
            })
          ) : (
            <FilterMessage />
          )
        ) : filterValueBrand ? (
          filteredProductsBrand.length > 0 ? (
            filteredProductsBrand.map((product, index) => (
              <CarItem key={index} {...product} />
            ))
          ) : (
            <FilterMessage />
          )
        ) : filterValuePrices ? (
          filteredProductsPrice.length > 0 ? (
            filteredProductsPrice.map((product, index) => (
              <CarItem key={index} {...product} />
            ))
          ) : (
            <FilterMessage />
          )
        ) : (
          <FilterMessage />
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
