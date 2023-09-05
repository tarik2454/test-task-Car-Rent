import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://64df632671c3335b2582897e.mockapi.io',
});

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.get('/cars');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
