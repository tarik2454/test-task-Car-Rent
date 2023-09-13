import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterProductsSlice',
  initialState: {
    items: [],
    filterValueBrand: '',
    filteredProductsBrand: [],
    filterValuePrices: null,
    filteredProductsPrice: [],
  },

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilterValueBrand: (state, action) => {
      state.filterValueBrand = action.payload;
    },
    setFilteredProductsBrand: state => {
      const filterValueBrand = state.filterValueBrand.toLowerCase();

      state.filteredProductsBrand = state.items.filter(product =>
        product.make.toLowerCase().includes(filterValueBrand)
      );
    },
    setFilterValuePrices: (state, action) => {
      state.filterValuePrices = action.payload;
    },
    setFilteredProductsPrice: state => {
      const filterValuePrices = state.filterValuePrices;

      state.filteredProductsPrice = state.items.filter(product => {
        const priceWithoutDollarSign = parseFloat(
          product.rentalPrice.replace('$', '')
        );

        return priceWithoutDollarSign === filterValuePrices;
      });
    },
    clearFilter: state => {
      state.filterValueBrand = '';
      state.filterValuePrices = null;
      state.filteredProductsBrand = [];
      state.filteredProductsPrice = [];
    },
  },
});

export const {
  setFilterValueBrand,
  setFilterValuePrices,
  setFilteredProductsBrand,
  setItems,
  setFilteredProductsPrice,
  clearFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
