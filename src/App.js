import React from 'react'
import { Route, Routes } from 'react-router'
import FavoritesContainer from './components/Favorites/FavoritesContainer'
import Layout from './components/pages/Layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="favorites" element={<FavoritesContainer />} />
    </Routes>
  )
}

export default App
