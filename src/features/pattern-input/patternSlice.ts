import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Operation {
  id: number;
  pattern: string;
  flags: string[];
  listFormat: string;
  replace: string;
}

type PatternState = Operation[];

const defaultOperation: Operation = {
  id: 1,
  pattern: '.*',
  flags: ['g'],
  listFormat: '[ $& ]',
  replace: '$&',
};

const initialState: PatternState = [defaultOperation];

const makeOperation = (id: number) => ({ ...defaultOperation, id });
const findOperationById = (state: PatternState, id: number) =>
  state.find((op) => op.id === id);

const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    add(state) {
      const id = state.length + 1;
      state.push(makeOperation(id));
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      return state.filter((op) => op.id !== id);
    },
    move(state, action: PayloadAction<{ id: number; toIdx: number }>) {
      const { id, toIdx } = action.payload;
      const op = findOperationById(state, id);

      if (toIdx > state.length - 1 || toIdx < 0)
        throw Error('move out of bounds');

      if (!op) return;

      const fromIdx = state.indexOf(op);

      if (toIdx === fromIdx) return;

      state.splice(fromIdx, 1);
      state.splice(toIdx, 0, op);
    },
    setPattern(state, action: PayloadAction<{ id: number; pattern: string }>) {
      const { id, pattern } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.pattern = pattern;
    },
    setFlags(state, action: PayloadAction<{ id: number; flags: string[] }>) {
      const { id, flags } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.flags = flags;
    },
    setListFormat(
      state,
      action: PayloadAction<{ id: number; listFormat: string }>
    ) {
      const { id, listFormat } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.listFormat = listFormat;
    },
    setReplace(state, action: PayloadAction<{ id: number; replace: string }>) {
      const { id, replace } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.replace = replace;
    },
  },
});

export const {
  add,
  remove,
  move,
  setPattern,
  setFlags,
  setListFormat,
  setReplace,
} = patternSlice.actions;
export { initialState, makeOperation };
export default patternSlice.reducer;

export const selectOperations = (state: RootState) => state.pattern;
export const selectOperation = (state: RootState, id: number) =>
  state.pattern.find((op) => op.id === id);
export const selectOperationPattern = createSelector(
  selectOperation,
  (op) => op?.pattern
);
export const selectOperationFlags = createSelector(
  selectOperation,
  (op) => op?.flags
);
export const selectOperationListFormat = createSelector(
  selectOperation,
  (op) => op?.listFormat
);
export const selectOperationReplace = createSelector(
  selectOperation,
  (op) => op?.replace
);
