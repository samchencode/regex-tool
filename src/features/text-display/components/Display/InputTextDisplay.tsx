import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import * as regex from '../../../../lib/regex';
import { useAppSelector } from '../../../../app/hooks';
import { patternSelectors } from '../../../pattern-input';
import split from '../../splitStringAtPairedIndicies';

interface InputTextDisplayProps {
  value: string;
  onChange: (str: string) => void;
}

const InputTextDisplay = ({ value, onChange }: InputTextDisplayProps) => {
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
      onChange={onChange}
      highlightRanges={highlightRanges}
      highlightColor={ops[0].color}
    />
  );
};

export default InputTextDisplay;
