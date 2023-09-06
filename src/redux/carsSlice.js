import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operation';

const initialState = {
  items: [],
  currentPage: 1,
  itemsPerPage: 8,
  previousItems: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    incrementPage: (state, action) => {
      state.currentPage += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.previousItems = [...state.items];
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { incrementPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
