import React, { useState } from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import * as regex from '../../../../lib/regex';
import { useAppSelector } from '../../../../app/hooks';
import { patternSelectors } from '../../../pattern-input';
import split from '../../splitStringAtPairedIndicies';

const InputTextDisplay = () => {
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nesciunt?' +
      'A consequatur, porro at ex quod hic placeat non amet?'
  );

  const ops = useAppSelector(patternSelectors.selectOperations);

  let matches: any[] = [];
  try {
    matches = regex.match(ops[0].pattern, ops[0].flags, value);
  } catch (e) {
    matches = [];
  }

  const highlightRanges = split(
    value,
    matches.map((m) => [m.startIdx, m.endIdx])
  );

  return (
    <TextDisplay
      type={TextDisplayType.INPUT}
      value={value}
      onChange={setValue}
      highlightRanges={highlightRanges}
      highlightColor={ops[0].color}
    />
  );
};

export default InputTextDisplay;