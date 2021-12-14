import React from 'react';
import Favorites from './Favorites';

const FavoritesContainer = () => {
  const memes = localStorage.getItem('memesFav');
  const memesFavPase = memes.length ? JSON.parse(memes) : [];
  const list = Boolean(memesFavPase.length) && memesFavPase.map(({id, url, name}) => (
    <div className='meme' key={id}>
      <img className="meme__img" src={url} alt={name} />
      <p className="meme__name">{name}</p>
    </div>
  ));
  return <Favorites list={list}/>;
};

export default FavoritesContainer;
