import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCars } from 'redux/Cars/selectors';
import {
  filterProducts,
  filteredProductsPrice,
  setFilterValue,
  setFilterValuePrices,
  setItems,
} from 'redux/Filter/filterSlice';
import { GlobalStyledButton } from 'styles/GlobalStyle';
import { StyledFilter, StyledName } from './SideBar,styled';

export const SideBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  console.log(cars);

  useEffect(() => {
    dispatch(setItems(cars));
  }, [dispatch, cars]);

  const handleFilterChange = selectedOption => {
    dispatch(setFilterValue(selectedOption.value));
  };

  const handlePriceChange = selectedOption => {
    const selectedPriceString = selectedOption.value;
    const selectedPrice = parseFloat(selectedPriceString.replace('$', ''));

    dispatch(setFilterValuePrices(selectedPrice));
  };

  const handleFilterSubmit = () => {
    dispatch(filterProducts()) && dispatch(filteredProductsPrice());
  };

  const uniqueMakes = Array.from(new Set(cars.map(product => product.make)));
  const uniquePrices = Array.from(
    new Set(cars.map(product => product.rentalPrice))
  );

  const options = uniqueMakes.map(make => ({
    value: make,
    label: make,
  }));

  const options2 = uniquePrices.map(price => ({
    value: price,
    label: price,
  }));

  return (
    <StyledFilter>
      <div>
        <StyledName>Car brand</StyledName>
        <Select
          options={options}
          onChange={handleFilterChange}
          placeholder="Select brand"
        />
      </div>
      <div>
        <StyledName>Price/ 1 hour</StyledName>
        <Select
          options={options2}
          onChange={handlePriceChange}
          placeholder="Select price"
        />
      </div>
      <GlobalStyledButton $padding="14px 44px" onClick={handleFilterSubmit}>
        Search
      </GlobalStyledButton>
    </StyledFilter>
  );
};
