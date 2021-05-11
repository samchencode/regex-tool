import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="top-nav">
        <h1>samchencode</h1>
      </nav>

      {/* eslint-disable-next-line no-script-url */}
      <form className="pattern-input" action="javascript:void(0);">
      <ul className="pattern-input__list">
          <li className="pattern-input__row">
            <label htmlFor="pattern--1">ReGex Pattern 1</label>
            <input type="text" id="pattern--1" placeholder="/.*/g" />
          </li>
          <li className="pattern-input__row">
            <label htmlFor="pattern--2">ReGex Pattern 2</label>
            <input type="text" id="pattern--2" placeholder="/.*/g" />
          </li>
          <li className="pattern-input__row">
            <label htmlFor="pattern--3">ReGex Pattern 3</label>
            <input type="text" id="pattern--3" placeholder="/.*/g" />
          </li>
          <li className="pattern-input__row">
            <label htmlFor="pattern--4">ReGex Pattern 4</label>
            <input type="text" id="pattern--4" placeholder="/.*/g" />
          </li>
          <li>
            <button className="pattern-input__new">New Rule</button>
          </li>
        </ul>
      </form>

      <div className="text-display">
        <textarea className="text-display__input">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          vero.
        </textarea>
        <textarea className="text-display__highlight-overlay">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          vero.
        </textarea>
      </div>

      <nav className="bottom-nav">
        <ul className="bottom-nav__list">
          <li className="bottom-nav__item">Input</li>
          <li className="bottom-nav__item">List</li>
          <li className="bottom-nav__item">Replace</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
