import ButtonRemove from 'components/ButtonRemove/ButtonRemove';
import { localStorageFun } from 'components/utils';
import React, { useEffect, useState } from 'react';
import Favorites from './Favorites';

const FavoritesContainer = () => {
  const memesFavStorage = localStorageFun('memesFav');
  const [ memesFav ,setMemesFav] = useState(memesFavStorage);

  useEffect(() => {
    setMemesFav(memesFavStorage);
  }, []);

  const list = Boolean(memesFav.length) && memesFav.map(({id, url, name}) => (
    <div className='meme' key={id}>
      <img className="meme__img" src={url} alt={name} />
      <p className="meme__name">{name}</p>
    </div>
  ));
  return (
    <>
      <ButtonRemove />
      <Favorites list={list}/>;
    </>
  );
};

export default FavoritesContainer;
