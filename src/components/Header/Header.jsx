import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import IconArrowLeft from "../Icons/IconArrowLeft";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">CRM</Link>
      <button className="header__back" type="button">
        <IconArrowLeft size="20"/>
      </button>
      <div className="header__user">
        <div className="header__avatar"></div>
        <div className="header__name">TestRU</div>
      </div>
    </header>
  )
};

export default Header;
