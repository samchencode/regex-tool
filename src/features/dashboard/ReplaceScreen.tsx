import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay, { TextDisplayType } from '../text-display';

const ReplaceScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_REPLACE} />
    <TextDisplay type={TextDisplayType.REPLACE} />
  </>
);

export default ReplaceScreen;
