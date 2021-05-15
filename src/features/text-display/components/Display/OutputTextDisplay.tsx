import React, { useState } from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';

const OutputTextDisplay = () => {
  const [value, setValue] = useState(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, commodi?'
  );

  // const ops = useAppSelector(patternSelectors.selectOperations);

  return (
    <TextDisplay
      type={TextDisplayType.OUTPUT}
      value={value}
      onChange={setValue}
    />
  );
};

export default OutputTextDisplay;
