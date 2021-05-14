import {
  selectOperations,
  selectOperationIds,
  selectOperation,
  selectOperationPattern,
  selectOperationFlags,
  selectOperationListFormat,
  selectOperationReplace,
  selectOperationColor,
} from './patternSlice';

export { default } from './PatternInput';
export { PatternRowType } from './components/Row';
export { default as patternReducer } from './patternSlice';

export const patternSelectors = {
  selectOperations,
  selectOperationIds,
  selectOperation,
  selectOperationPattern,
  selectOperationFlags,
  selectOperationListFormat,
  selectOperationReplace,
  selectOperationColor,
};
