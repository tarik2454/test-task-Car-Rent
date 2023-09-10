import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterProductsSlice',
  initialState: {
    items: [],
    filterValue: '',
    filterValuePrices: null,
    filteredProducts: [],
    filteredProductsPrice: [],
  },

  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setFilterValuePrices: (state, action) => {
      state.filterValuePrices = action.payload;
    },
    filterProducts: state => {
      const filterValue = state.filterValue.toLowerCase();

      state.filteredProducts = state.items.filter(product =>
        product.make.toLowerCase().includes(filterValue)
      );
    },
    filteredProductsPrice: state => {
      const filterValuePrices = state.filterValuePrices;

      state.filteredProductsPrice = state.items.filter(product => {
        const priceWithoutDollarSign = parseFloat(
          product.rentalPrice.replace('$', '')
        );

        return priceWithoutDollarSign === filterValuePrices;
      });
    },
    clearFilter: state => {
      state.filterValue = '';
      state.filterValuePrices = null;
      state.filteredProducts = [];
      state.filteredProductsPrice = [];
    },
  },
});

export const {
  setFilterValue,
  setFilterValuePrices,
  filterProducts,
  setItems,
  filteredProductsPrice,
  clearFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
