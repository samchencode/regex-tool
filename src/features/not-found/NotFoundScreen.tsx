import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import type { RouteComponentProps } from 'react-router-dom';
import './NotFoundScreen.css';

const NotFoundScreen = (props: RouteComponentProps) => (
  <div className="not-found">
    <i className="not-found__icon fas fa-heart-broken"></i>
    <h3 className="not-found__title">
      Oops we couldn't find 
      <code>
        {props.location.pathname}
      </code>
    </h3>
    <Link to="/">Go Home</Link>
  </div>
)

export default withRouter(NotFoundScreen);