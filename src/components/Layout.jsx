import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <GlobalStyledContainer>
        <Navigation />
        <GlobalStyledMain>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </GlobalStyledMain>
      </GlobalStyledContainer>
    </>
  );
};
