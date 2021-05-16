import {
  add,
  remove,
  move,
  setPattern,
  setFlags,
  setListFormat,
  setReplace,
  setInput,
  setFocus
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
  setInput,
  setFocus,
};

export { default as transform } from './transform';