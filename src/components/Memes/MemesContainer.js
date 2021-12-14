import React, { useEffect, useState } from 'react';
import { getApi } from '../utils';
import Memes from './Memes';

const MemesContainer = () => {
  const [memes, setMemes] = useState([]);
  const [memesFav, setMemesFav] = useState([]);
  const storageMemes = JSON.parse(localStorage.getItem('memes')) || [];

  useEffect(() => {
    if(storageMemes.length) {
      setMemes(storageMemes);
    }else{
      getApi.get().then(res => setMemes(res.data.memes));
      localStorage.setItem('memes', JSON.stringify(memes));
    }
  }, []);

  const selectFav = (selectMemeFav) =>{
    const copyArrayMemes = [...memesFav, selectMemeFav];
    // const removeMemesDuplicates = copyArrayMemes.reduce((allMemes, memes) => Array.from(new Set([...allMemes, memes])), []);
    // console.log(removeMemesDuplicates);
    setMemesFav(Array.from(new Set([...copyArrayMemes])));
    // localStorage.setItem('memesFav', JSON.stringify(memesFav));
  };

  console.log(memesFav);
  return <Memes memes={memes} selectFav={selectFav}/>;

};

export default MemesContainer;
