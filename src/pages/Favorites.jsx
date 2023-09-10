import React from 'react';
import { FavoritesList } from 'components/Favorites/FavoritesList';
import { SideBar } from 'components/SideBar/SideBar';
import { GlobalStyledH1 } from 'styles/GlobalStyle';

export const Favorites = () => {
  return (
    <>
      <SideBar />
      <GlobalStyledH1>Favorites</GlobalStyledH1>
      <FavoritesList />
    </>
  );
};
