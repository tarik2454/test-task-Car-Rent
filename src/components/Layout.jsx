import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';

export const Layout = () => {
  return (
    <>
      <GlobalStyledMain>
        <GlobalStyledContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </GlobalStyledContainer>
      </GlobalStyledMain>
    </>
  );
};
