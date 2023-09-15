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
import {
  selectFilteredProductsBrand,
  selectFilteredProductsPrice,
  selectIsFilterActive,
} from 'redux/Filter/selectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filteredProductsBrand = useSelector(selectFilteredProductsBrand);
  const filteredProductsPrice = useSelector(selectFilteredProductsPrice);
  const isFilterActive = useSelector(selectIsFilterActive);

  console.log(filteredProductsBrand);
  console.log(filteredProductsPrice);

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
      {(filteredProductsBrand.length <= 8 ||
        filteredProductsPrice.length <= 8) &&
      (isFilterActive || itemsToDisplay >= cars.length) ? null : (
        <GlobalStyledLink onClick={handleLoadMore} $textAlign="center">
          Load more
        </GlobalStyledLink>
      )}
    </>
  );
};
