import { CarsList } from 'components/Cars/CarsList';
import { SideBar } from 'components/SideBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementPage } from 'redux/Cars/carsSlice';
import { fetchCars } from '../redux/Cars/operation';

import { GlobalStyledH1 } from 'styles/GlobalStyle';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <SideBar />
      <GlobalStyledH1>Catalog</GlobalStyledH1>
      <CarsList />
      <button onClick={handleLoadMore} style={{ marginBottom: '150px' }}>
        Load more
      </button>
    </div>
  );
};
