import React from 'react';
import { array, bool } from 'prop-types';
import './styles.css';

const Favorites = ({list}) => (
  <div className="container container__fav">
    {list}
  </div>
);

Favorites.propTypes = {
  list: array || bool
};
Favorites.DefaultProps ={
  list: []
};

export default Favorites;
