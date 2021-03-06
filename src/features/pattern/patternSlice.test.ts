import reducer, {
  initialState,
  makeOperation,
  add,
  remove,
  move,
  setPattern,
  setFlags,
  setListFormat,
  setReplace,
  setInput,
  setFocus,
} from './patternSlice';
import {
  selectOperations,
  selectOperationIds,
  selectOperation,
  selectOperationPattern,
  selectOperationFlags,
  selectOperationListFormat,
  selectOperationReplace,
  selectOperationColor,
  selectInput,
  selectFocus,
} from './patternSelectors';

describe('pattern slice', () => {
  it('should return initial state after creation', () => {
    const unknownAction = { type: 'unknown' };
    const state = reducer(undefined, unknownAction);
    expect(state).toEqual(initialState);
  });

  it('should add new defaultOperation', () => {
    const expected = expect.arrayContaining([
      expect.any(Object),
      expect.any(Object),
    ]);

    const newState = reducer(initialState, add());
    const rootState = { pattern: newState };

    expect(selectOperations(rootState)).toEqual(expected);
  });

  it('should set focus after adding', () => {
    const newState = reducer(initialState, add());
    const rootState = { pattern: newState };

    expect(selectFocus(rootState)).toEqual(1);
  });

  it('should add new operation with random color', () => {
    const expected = expect.arrayContaining([
      expect.objectContaining({ color: expect.any(String) }),
      expect.objectContaining({ color: expect.any(String) }),
    ]);

    const newState = reducer(initialState, add());
    const rootState = { pattern: newState };

    expect(selectOperations(rootState)).toEqual(expected);

    const ids = selectOperationIds(rootState);
    expect(selectOperationColor(rootState, ids[0])).not.toBe(
      selectOperationColor(rootState, ids[1])
    );
  });

  it('should remove operation at a given index', () => {
    const state = {
      ...initialState,
      operations: [makeOperation(1), makeOperation(2)],
    };

    const newState = reducer(state, remove({ id: 1 }));
    const rootState = { pattern: newState };

    expect(selectOperation(rootState, 2)).toEqual(expect.any(Object));
    expect(selectOperation(rootState, 1)).toBeUndefined();
  });

  it('should set focus after removing last item in sequence', () => {
    const state = {
      ...initialState,
      operations: [makeOperation(1), makeOperation(2)],
    };

    const newState = reducer(state, remove({ id: 2 }));
    const rootState = { pattern: newState };

    expect(selectFocus(rootState)).toEqual(0);
  });

  it('should set focus to -1 after removing final item', () => {
    const state = {
      ...initialState,
      operations: [makeOperation(1)],
    };

    const newState = reducer(state, remove({ id: 1 }));
    const rootState = { pattern: newState };

    expect(selectFocus(rootState)).toEqual(-1);
  });

  it('should move operation from one index to another', () => {
    const state = {
      ...initialState,
      operations: [makeOperation(1), makeOperation(2), makeOperation(3)],
    };
    const newState = reducer(state, move({ id: 2, toIdx: 0 }));
    const rootState = { pattern: newState };
    expect(selectOperations(rootState).findIndex((op) => op.id === 2)).toBe(0);

    const newState2 = reducer(state, move({ id: 2, toIdx: 2 }));
    const rootState2 = { pattern: newState2 };
    expect(selectOperations(rootState2).findIndex((op) => op.id === 2)).toBe(2);
  });

  it('should set pattern string', () => {
    const newState = reducer(
      initialState,
      setPattern({ id: 1, pattern: 'hai' })
    );
    const rootState = { pattern: newState };
    expect(selectOperationPattern(rootState, 1)).toBe('hai');
  });

  it('should set flags', () => {
    const newState = reducer(
      initialState,
      setFlags({ id: 1, flags: ['m', 'i'] })
    );
    const rootState = { pattern: newState };
    expect(selectOperationFlags(rootState, 1)).toEqual(['m', 'i']);
  });

  it('should set listFormat string', () => {
    const newState = reducer(
      initialState,
      setListFormat({ id: 1, listFormat: '<< $& >>' })
    );
    const rootState = { pattern: newState };
    expect(selectOperationListFormat(rootState, 1)).toBe('<< $& >>');
  });

  it('should set replace string', () => {
    const newState = reducer(
      initialState,
      setReplace({ id: 1, replace: '<< $& >>' })
    );
    const rootState = { pattern: newState };
    expect(selectOperationReplace(rootState, 1)).toBe('<< $& >>');
  });

  it('should set input string', () => {
    const newState = reducer(initialState, setInput({ value: 'Hai' }));
    const rootState = { pattern: newState };
    expect(selectInput(rootState)).toBe('Hai');
  });

  it('should set focus index', () => {
    const newState = reducer(initialState, setFocus({ idx: 0 }));
    const rootState = { pattern: newState };
    expect(selectFocus(rootState)).toBe(0);
  });
});
