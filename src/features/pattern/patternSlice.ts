import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as regex from '../../lib/regex';

interface Operation {
  id: number;
  pattern: string;
  flags: string[];
  listFormat: string;
  replace: string;
  color: string;
}

interface Transform {
  input: string;
  list: string;
  replace: string;
}

type PatternState = {
  operations: Operation[];
  input: string;
};

const defaultOperation: Operation = {
  id: 1,
  pattern: '.*',
  flags: ['g'],
  listFormat: '[ $& ]',
  replace: '$&',
  color: '#ffd700',
};

const defaultInput = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque.';

const initialState: PatternState = {
  operations: [defaultOperation],
  input: defaultInput,
};

const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
const makeOperation = (id: number) => ({
  ...defaultOperation,
  id,
  color: randomColor(),
});
const findOperationById = (state: PatternState, id: number) =>
  state.operations.find((op) => op.id === id);

const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    add(state) {
      const id = state.operations.length + 1;
      state.operations.push(makeOperation(id));
    },
    remove(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.operations = state.operations.filter((op) => op.id !== id);
    },
    move(state, action: PayloadAction<{ id: number; toIdx: number }>) {
      const { id, toIdx } = action.payload;
      const op = findOperationById(state, id);

      if (toIdx > state.operations.length - 1 || toIdx < 0)
        throw Error('move out of bounds');

      if (!op) return;

      const fromIdx = state.operations.indexOf(op);

      if (toIdx === fromIdx) return;

      state.operations.splice(fromIdx, 1);
      state.operations.splice(toIdx, 0, op);
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
    setInput(state, action: PayloadAction<{value: string}>) {
      state.input = action.payload.value;
    }
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
} = patternSlice.actions;
export { initialState, makeOperation };
export default patternSlice.reducer;
export type { PatternState };