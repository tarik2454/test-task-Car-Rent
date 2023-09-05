import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" component={<Catalog />} />
        <Route path="/favorites" component={<Favorites />} />
        {/* <Redirect to="/" /> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
