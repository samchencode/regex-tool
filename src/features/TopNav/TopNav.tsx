import React from 'react';
import './style.css';

const TopNav = () => (
  <nav className="top-nav">
    <ul className="top-nav__list">
      <li className="top-nav__item top-nav__item--title">
        <h1 className="top-nav__title">samchencode</h1>
      </li>
      <li className="top-nav__item">List Matches</li>
      <li className="top-nav__item">Replace</li>
    </ul>
  </nav>
);

export default TopNav;
