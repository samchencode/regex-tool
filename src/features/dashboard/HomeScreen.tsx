import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay, { TextDisplayType } from '../text-display';

const HomeScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_ONLY} />
    <TextDisplay type={TextDisplayType.INPUT_ONLY} />
  </>
);

export default HomeScreen;
