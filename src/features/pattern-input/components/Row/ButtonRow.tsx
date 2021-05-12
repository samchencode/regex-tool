import React from 'react';

interface ButtonRowProps {
  onClick: () => void;
}

const ButtonRow = ({ onClick }: ButtonRowProps) => (
  <li className="pattern-input__row pattern-input__row--full">
    <button onClick={onClick}><i className="fas fa-plus"></i></button>
  </li>
);

export default ButtonRow;