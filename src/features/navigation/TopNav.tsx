import React from 'react';
import { Link, Route } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => (
  <nav className="top-nav">
    <ul className="top-nav__list">
      <li className="top-nav__item top-nav__item--title">
        <h1 className="top-nav__title">samchencode</h1>
      </li>
      <Route path="/match">
        <li className="top-nav__item">
          <Link to="/match/list">List Matches</Link>
        </li>
        <li className="top-nav__item">
          <Link to="/match/replace">Replace</Link>
        </li>
      </Route>
    </ul>
  </nav>
);

export default TopNav;
