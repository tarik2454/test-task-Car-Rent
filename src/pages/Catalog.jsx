import { CarsList } from 'components/CarsList/CarsList';
import { SideBar } from 'components/SideBar/SideBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'redux/Cars/carsSlice';
import { fetchCars } from '../redux/Cars/operation';
import { GlobalStyledH1, GlobalStyledLink } from 'styles/GlobalStyle';
import {
  selectCars,
  selectCurrentPage,
  selectItemsPerPage,
} from 'redux/Cars/selectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const itemsToDisplay = itemsPerPage * currentPage;

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <>
      <SideBar />
      <GlobalStyledH1>Catalog</GlobalStyledH1>
      <CarsList />
      {cars.length >= 8 && cars.length > itemsToDisplay ? (
        <GlobalStyledLink onClick={handleLoadMore} $textAlign="center">
          Load more
        </GlobalStyledLink>
      ) : null}
    </>
  );
};
