const { createSlice } = require('@reduxjs/toolkit');

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesCars: [],
  },

  reducers: {
    addFavoritesCar: (state, { payload }) => {
      state.favoritesCars.push(payload);
    },
    removeFavoritesCar: (state, { payload }) => {
      state.favoritesCars = state.favoritesCars.filter(
        item => item.id !== payload
      );
    },
  },
});

export const { addFavoritesCar, removeFavoritesCar } = favoritesSlice.actions;
export const favouritesCarsReducer = favoritesSlice.reducer;
