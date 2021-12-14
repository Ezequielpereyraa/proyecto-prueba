import React from 'react';
import {func, string} from 'prop-types';
import Like from '../Svg/like.svg';
import './styles.css';

const ButtonLike = ({selectFav, id,name,url}) =>(
  <img
    onClick={()=> selectFav({id,name,url})}
    className="buttonlike"
    src={Like}
    alt="algo" />
);

ButtonLike.propTypes = {
  selectFav: func,
  id: string,
  name: string,
  url: string
};

ButtonLike.defaultProps = {
  selectFav: () => {},
  id: 0,
  name: '',
  url: ''
};

export default ButtonLike;
