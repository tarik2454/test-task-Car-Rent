import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCars } from 'redux/Cars/selectors';
import {
  setFilterValueBrand,
  setFilterValuePrices,
  setFilteredProductsBrand,
  setFilteredProductsPrice,
  setItems,
  setSearchButton,
} from 'redux/Filter/filterSlice';
import { GlobalStyledButton } from 'styles/GlobalStyle';
import { StyledFilter, StyledName } from './SideBar.styled';

export const SideBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  console.log(cars);

  useEffect(() => {
    dispatch(setItems(cars));
  }, [dispatch, cars]);

  const handleBrandChange = selectedOption => {
    dispatch(setFilterValueBrand(selectedOption.value));
  };

  const handlePriceChange = selectedOption => {
    const selectedPriceString = selectedOption.value;
    const selectedPrice = parseFloat(selectedPriceString.replace('$', ''));

    dispatch(setFilterValuePrices(selectedPrice));
  };

  const handleFilterSubmit = () => {
    dispatch(setFilteredProductsBrand());
    dispatch(setFilteredProductsPrice());
    dispatch(setSearchButton(true));
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
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: '224px',
              padding: '6px 10px',
              fontSize: '18px',
              background: '#F7F7FB',
              border: 'none',
              borderRadius: '14px',
              outline: '2px solid',
              outlineColor: state.isFocused ? 'black' : 'transparent',
              cursor: 'pointer',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isSelected ? '#121417;' : '#8a8a89',
              backgroundColor: 'none',
              cursor: 'pointer',
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              background: '#fff',
              borderRadius: '14px',
              border: '1px solid rgba(18, 20, 23, 0.05)',
              boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
              overflow: 'auto',
            }),
          }}
          options={options}
          onChange={handleBrandChange}
          placeholder="Select brand"
        />
      </div>
      <div>
        <StyledName>Price/ 1 hour</StyledName>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: '224px',
              padding: '6px 10px',
              fontSize: '18px',
              background: '#F7F7FB',
              border: 'none',
              borderRadius: '14px',
              outline: '2px solid',
              outlineColor: state.isFocused ? 'black' : 'transparent',
              cursor: 'pointer',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isSelected ? '#121417;' : '#8a8a89',
              backgroundColor: 'none',
              cursor: 'pointer',
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              background: '#fff',
              borderRadius: '14px',
              border: '1px solid rgba(18, 20, 23, 0.05)',
              boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
              overflow: 'auto',
            }),
          }}
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
