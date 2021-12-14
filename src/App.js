import React from 'react';
import { Route, Routes } from 'react-router';
import FavoritesContainer from 'components/Favorites/FavoritesContainer';
import Header from 'components/Header';
import Layout from 'components/pages/Layout';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="favorites" element={<FavoritesContainer />} />
      </Routes>
    </>
  );
};

export default App;
