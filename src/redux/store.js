import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/carsSlice';
import { favouritesCarsReducer } from './Favorites/favoritesSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './Filter/filterSlice';

const persistConfigFavorites = {
  key: 'favorites',
  version: 1,
  storage,
};

const persistedReducerFavorites = persistReducer(
  persistConfigFavorites,
  favouritesCarsReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedReducerFavorites,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
