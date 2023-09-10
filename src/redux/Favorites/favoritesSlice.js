import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesCars: [],
  },

  reducers: {
    toggleFavoritesCar: (state, { payload }) => {
      const carIndex = state.favoritesCars.findIndex(
        item => item.id === payload.id
      );

      if (carIndex === -1) {
        // Если машина не найдена в избранном, добавляем её
        state.favoritesCars.push(payload);
      } else {
        // Если машина уже есть в избранном, удаляем её
        state.favoritesCars.splice(carIndex, 1);
      }
    },
    removeFavoritesCar: (state, { payload }) => {
      state.favoritesCars = state.favoritesCars.filter(
        item => item.id !== payload
      );
    },
  },
});

export const { toggleFavoritesCar, removeFavoritesCar } =
  favoritesSlice.actions;
export const favouritesCarsReducer = favoritesSlice.reducer;
