export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectItemsPerPage = state => state.cars.itemsPerPage;
export const selectIsLastPage = state => state.cars.isLastPage;
export const selectTotalPages = state => state.cars.totalPages;
export const selectPreviousItems = state => state.cars.previousItems;
