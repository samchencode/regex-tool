import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay from '../text-display';

const ListMatchesScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_LIST} />
    <TextDisplay />
  </>
);

export default ListMatchesScreen;
