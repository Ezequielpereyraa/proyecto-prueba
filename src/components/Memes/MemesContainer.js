import React, { useEffect, useState } from 'react';
import { getApi, localStorageFun } from '../utils';
import Memes from './Memes';

const MemesContainer = () => {
  const storageMemes = localStorageFun('memes');
  const storageMemesFav = localStorageFun('memesFav');

  const [memes, setMemes] = useState(storageMemes);
  const [memesFav, setMemesFav] = useState(storageMemesFav);

  useEffect(() => {
    if(!memes.length) {
      getApi.get().then(res => setMemes(res.data.memes));
      localStorageFun('memes', memes);
    }else {
      setMemes(memes);
    }

  }, []);

  const selectFav = (selectMemeFav) =>{
    const copyArrayMemes = [...memesFav, selectMemeFav];
    const removeMemesDuplicates = copyArrayMemes.reduce((allMemes, memes) => Array.from(new Set([...allMemes, memes])), []);
    // console.log(removeMemesDuplicates);
    setMemesFav(removeMemesDuplicates);
    localStorageFun('memesFav', memesFav);
  };

  return <Memes memes={memes} selectFav={selectFav}/>;

};

export default MemesContainer;
