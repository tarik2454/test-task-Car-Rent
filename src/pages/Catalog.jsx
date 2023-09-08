import { CarsList } from 'components/Cars/CarsList';
import { SideBar } from 'components/SideBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementPage } from 'redux/Cars/carsSlice';
import { fetchCars } from '../redux/Cars/operation';
import { GlobalStyledH1, GlobalStyledLink } from 'styles/GlobalStyle';

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
      <GlobalStyledLink
        onClick={handleLoadMore}
        style={{ textAlign: 'center' }}
      >
        Load more
      </GlobalStyledLink>
    </div>
  );
};
