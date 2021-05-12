import React from 'react';
import './BottomNav.css';

const BottomNav = () => (
  <nav className="bottom-nav">
    <ul className="bottom-nav__list">
      <li className="bottom-nav__item">
        <i className="bottom-nav__icon far fa-file-alt"></i>
        <div className="bottom-nav__label">Input</div>
      </li>
      <li className="bottom-nav__item">
        <i className="bottom-nav__icon fas fa-clipboard-list"></i>
        <div className="bottom-nav__label">List</div>
      </li>
      <li className="bottom-nav__item">
        <i className="bottom-nav__icon fas fa-random"></i>
        <div className="bottom-nav__label">Replace</div>
      </li>
    </ul>
  </nav>
);

export default BottomNav;