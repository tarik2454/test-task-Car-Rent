export const selectFilter = state => state.filter;
export const selectFilterValue = state => state.filter.filterValue;
export const selectFilteredProducts = state => state.filter.filteredProducts;
export const selectFilterValuePrices = state => state.filter.filterValuePrices;
export const selectFilteredProductsPrice = state =>
  state.filter.filteredProductsPrice;
