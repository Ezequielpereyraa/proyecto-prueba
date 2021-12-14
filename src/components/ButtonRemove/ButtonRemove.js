import { localStorageFun } from 'components/utils';
import React from 'react';

const ButtonRemove = () => {
  const handleRemove = () => localStorageFun();
  return (
    <button onClick={handleRemove}>
      Vaciar Favoritos
    </button>
  );
};

export default ButtonRemove;
