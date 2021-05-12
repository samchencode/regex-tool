import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay from '../text-display';

const HomeScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_ONLY} />
    <TextDisplay />
  </>
);

export default HomeScreen;
