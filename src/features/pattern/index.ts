import {
  add,
  remove,
  move,
  setPattern,
  setFlags,
  setListFormat,
  setReplace,
} from './patternSlice';

export { default as patternReducer } from './patternSlice';
export * as patternSelectors from './patternSelectors';

export const patternActions = {
  add,
  remove,
  move,
  setPattern,
  setFlags,
  setListFormat,
  setReplace,
};