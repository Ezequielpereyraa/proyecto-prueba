import React from 'react';
import { array, bool } from 'prop-types';

const Favorites = ({list}) => {
  console.log({list});
  return (
    <div className="container">
      {list}
    </div>
  );
};

Favorites.propTypes = {
  list: array || bool
};
Favorites.DefaultProps ={
  list: []
};

export default Favorites;
