import React, { useState } from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';

const InputTextDisplay = () => {
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nesciunt?' +
      'A consequatur, porro at ex quod hic placeat non amet?'
  );

  // const ops = useAppSelector(patternSelectors.selectOperations);

  return (
    <TextDisplay
      type={TextDisplayType.INPUT}
      value={value}
      onChange={setValue}
    />
  );
};

export default InputTextDisplay;
