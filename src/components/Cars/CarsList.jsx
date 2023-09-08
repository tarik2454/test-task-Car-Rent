import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/Cars/operation';
import {
  selectCars,
  selectCurrentPage,
  selectItemsPerPage,
} from 'redux/Cars/selectors';
import { styled } from 'styled-components';
import { GlobalStyledH1 } from 'styles/GlobalStyle';
import { CarItem } from './CarItem';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  // Определите, сколько элементов нужно показать на текущей странице
  const itemsToDisplay = itemsPerPage * currentPage;

  // Отображаем только часть элементов на текущей странице
  const visibleItems = cars.slice(0, itemsToDisplay);

  return (
    <>
      <GlobalStyledH1>Catalog</GlobalStyledH1>

      <StyledList>
        {visibleItems.map((car, index) => {
          return <CarItem key={index} {...car} />;
        })}
      </StyledList>
    </>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;
