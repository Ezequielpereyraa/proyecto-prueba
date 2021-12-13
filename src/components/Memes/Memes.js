import React from 'react'
import ButtonLike from '../ButtonLike/ButtonLike'
import './styles.css'

const Memes = ({memes, selectFav}) => (
   <div className='container'>
   {memes?.map(({id, url, name}) => (
      <div className='meme' key={id}>
        <ButtonLike selectFav={selectFav} id={id} url={url} name={name} />
        <img className="meme__img" src={url} alt={name} />
        <p className="meme__name">{name}</p>
     </div>

   ))}
   </div>
)


export default Memes
