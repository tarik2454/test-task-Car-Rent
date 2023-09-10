import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { Navigation } from './Navigation/Navigation';
import { Loader } from './Loader/Loader';
import { selectIsLoading } from 'redux/Cars/selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? <Loader /> : null}
      <GlobalStyledContainer>
        <Navigation />
        <GlobalStyledMain>
          <Outlet />
        </GlobalStyledMain>
      </GlobalStyledContainer>
    </>
  );
};
