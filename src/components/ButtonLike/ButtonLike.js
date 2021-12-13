import React from 'react'
import Like from '../Svg/like.svg'
import './styles.css'

const ButtonLike = ({selectFav, id,name,url}) => <img onClick={()=> selectFav({id,name,url})} className="buttonlike" src={Like} alt="algo" />


export default ButtonLike
