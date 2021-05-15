import React from 'react';
import PatternInput, { PatternRowType } from '../pattern-input';
import TextDisplay, { TextDisplayType } from '../text-display';

const ListMatchesScreen = () => (
  <>
    <PatternInput type={PatternRowType.PATTERN_LIST} />
    <TextDisplay type={TextDisplayType.LIST} />
  </>
);

export default ListMatchesScreen;
