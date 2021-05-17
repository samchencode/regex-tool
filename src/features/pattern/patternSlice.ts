import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import randomColor from './randomColor';

interface Operation {
  id: number | string;
  pattern: string;
  flags: string[];
  listFormat: string;
  replace: string;
  color: string;
}

type PatternState = {
  operations: Operation[];
  input: string;
  focus: number;
};

const defaultOperation: Operation = {
  id: 1,
  pattern: '.*',
  flags: ['g'],
  listFormat: '[ $& ]',
  replace: '$&',
  color: '#ffd700',
};

const defaultInput =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque.';

const initialState: PatternState = {
  operations: [defaultOperation],
  input: defaultInput,
  focus: 0,
};

const makeOperation = (id: string | number) => ({
  ...defaultOperation,
  id,
  color: randomColor(),
});
const findOperationById = (state: PatternState, id: number | string) =>
  state.operations.find((op) => op.id === id);

const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    add(state) {
      const id = ('' + Math.random()).slice(2);
      const newOperation = makeOperation(id);
      state.operations.push(newOperation);
      state.focus = state.operations.length - 1;
    },
    remove(state, action: PayloadAction<{ id: number | string }>) {
      const { id } = action.payload;
      const idx = state.operations.findIndex((op) => op.id === id);

      const last = idx === state.operations.length - 1;
      const focused = idx === state.focus;
      if ((focused && last) || idx < state.focus) {
        state.focus--;
      }

      state.operations.splice(idx, 1);
    },
    move(state, action: PayloadAction<{ id: number | string; toIdx: number }>) {
      const { id, toIdx } = action.payload;
      const op = findOperationById(state, id);

      if (toIdx > state.operations.length - 1 || toIdx < 0)
        throw Error('move out of bounds');

      if (!op) return;

      const fromIdx = state.operations.indexOf(op);

      if (toIdx === fromIdx) return;

      state.operations.splice(fromIdx, 1);
      state.operations.splice(toIdx, 0, op);

      state.focus = toIdx;
    },
    setPattern(
      state,
      action: PayloadAction<{ id: number | string; pattern: string }>
    ) {
      const { id, pattern } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.pattern = pattern;
    },
    setFlags(
      state,
      action: PayloadAction<{ id: number | string; flags: string[] }>
    ) {
      const { id, flags } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.flags = flags;
    },
    setListFormat(
      state,
      action: PayloadAction<{ id: number | string; listFormat: string }>
    ) {
      const { id, listFormat } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.listFormat = listFormat;
    },
    setReplace(
      state,
      action: PayloadAction<{ id: number | string; replace: string }>
    ) {
      const { id, replace } = action.payload;
      const op = findOperationById(state, id);
      if (!op) return;
      op.replace = replace;
    },
    setInput(state, action: PayloadAction<{ value: string }>) {
      state.input = action.payload.value;
    },
    setFocus(state, action: PayloadAction<{ idx: number }>) {
      state.focus = action.payload.idx;
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
  setInput,
  setFocus,
} = patternSlice.actions;
export { initialState, makeOperation };
export default patternSlice.reducer;
export type { PatternState };
