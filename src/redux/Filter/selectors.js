export const selectFilter = state => state.filter;
export const selectFilterValueBrand = state => state.filter.filterValueBrand;
export const selectFilterValuePrices = state => state.filter.filterValuePrices;
export const selectFilteredProductsBrand = state =>
  state.filter.filteredProductsBrand;
export const selectFilteredProductsPrice = state =>
  state.filter.filteredProductsPrice;
export const selectSearchButton = state => state.filter.searchButton;
