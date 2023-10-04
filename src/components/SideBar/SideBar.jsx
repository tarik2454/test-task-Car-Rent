import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCars } from 'redux/Cars/selectors';
import {
  clearFilter,
  setFilterValueBrand,
  setFilterValuePrices,
  setFilteredProductsBrand,
  setFilteredProductsPrice,
  setIsFilterActive,
  setItems,
} from 'redux/Filter/filterSlice';
import { GlobalStyledButton } from 'styles/GlobalStyle';
import { StyledFilter, StyledName } from './SideBar.styled';
import {
  selectFilterValueBrand,
  selectFilterValuePrices,
} from 'redux/Filter/selectors';
import { setCurrentPage } from 'redux/Cars/carsSlice';

export const SideBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filterValueBrand = useSelector(selectFilterValueBrand);
  const filterValuePrices = useSelector(selectFilterValuePrices);

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
    // Активируем фильтрацию при клике на кнопку поиска
    dispatch(setIsFilterActive(true));
  };

  const handleResetFilter = () => {
    dispatch(clearFilter());
    dispatch(setCurrentPage(1));
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
          value={
            filterValueBrand
              ? { value: filterValueBrand, label: filterValueBrand }
              : null
          }
          placeholder="Select brand"
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
              color: state.isSelected ? '#121417' : '#8a8a89',
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
        />
      </div>
      <div>
        <StyledName>Price/ 1 hour</StyledName>
        <Select
          value={
            filterValuePrices
              ? { value: filterValuePrices, label: filterValuePrices }
              : null
          }
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
              color: state.isSelected ? '#121417' : '#8a8a89',
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
      <GlobalStyledButton $padding="14px 14px" onClick={handleResetFilter}>
        Reset
      </GlobalStyledButton>
    </StyledFilter>
  );
};
