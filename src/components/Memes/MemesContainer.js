import React, { useEffect, useState } from 'react'
import { getApi } from '../utils';
import Memes from './Memes';

const MemesContainer = () => {
  const [memes, setMemes] = useState([]);
  const [memesFav, setMemesFav] = useState([]);
  const storageMemes = JSON.parse(localStorage.getItem('memes')) || [];

  useEffect(() => {
    if(Boolean(storageMemes.length)) {
      setMemes(storageMemes);
    }else{
      getApi.get().then(res => setMemes(res.data.memes))
      localStorage.setItem('memes', JSON.stringify(memes))
    }
  }, [])

  const selectFav = (meme) =>{
    const newMemesFav = [...memesFav, meme];
    console.log(newMemesFav);
    const memesDuplicate = newMemesFav.filter((item, index) =>
      console.log(newMemesFav.indexOf(item))
      );

     setMemesFav(newMemesFav);
     console.log({memesFav});
    // localStorage.setItem('memesFav', JSON.stringify(memesFav));
  }

  return <Memes memes={memes} selectFav={selectFav}/>

}

export default MemesContainer
