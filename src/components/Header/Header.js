import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <NavLink className={({isActive}) => isActive ? 'header__link is-active' : 'header__link'} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive ? 'header__link is-active' : 'header__link'} to="/favorites">Favorites</NavLink>
    </header>
  );
};

export default Header;
