import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay from '../text-display';

const ReplaceScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_REPLACE} />
    <TextDisplay />
  </>
);

export default ReplaceScreen;
