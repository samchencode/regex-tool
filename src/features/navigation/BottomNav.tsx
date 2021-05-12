import React from 'react';
import { Route, Link } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => (
  <Route exact path={['/', '/list', '/replace']}>
  <nav className="bottom-nav">
    <ul className="bottom-nav__list">
      <li className="bottom-nav__item">
        <Link to="/">
        <i className="bottom-nav__icon far fa-file-alt"></i>
        <div className="bottom-nav__label">Input</div>
        </Link>
      </li>
      <li className="bottom-nav__item">
        <Link to="/list">
        <i className="bottom-nav__icon fas fa-clipboard-list"></i>
        <div className="bottom-nav__label">List</div>
        </Link>
      </li>
      <li className="bottom-nav__item">
        <Link to="/replace">
        <i className="bottom-nav__icon fas fa-random"></i>
        <div className="bottom-nav__label">Replace</div>
        </Link>
      </li>
    </ul>
  </nav>
  </Route>
);

export default BottomNav;