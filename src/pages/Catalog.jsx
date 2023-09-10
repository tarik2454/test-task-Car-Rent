import { CarsList } from 'components/CarsList/CarsList';
import { SideBar } from 'components/SideBar/SideBar';
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
    <>
      <SideBar />
      <GlobalStyledH1>Catalog</GlobalStyledH1>
      <CarsList />
      <GlobalStyledLink onClick={handleLoadMore} $textAlign="center">
        Load more
      </GlobalStyledLink>
    </>
  );
};
