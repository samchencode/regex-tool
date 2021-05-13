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
  selectPatterns,
  selectOperation,
  selectOperationPattern,
  selectOperationFlags,
  selectOperationListFormat,
  selectOperationReplace,
} from './patternSlice';

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

    expect(selectPatterns(newState)).toEqual(expected);
  });

  it('should remove operation at a given index', () => {
    const initialState = [makeOperation(1), makeOperation(2)];

    const newState = reducer(initialState, remove({ id: 1 }));

    expect(selectOperation(newState, 2)).toEqual(expect.any(Object));
    expect(selectOperation(newState, 1)).toBeUndefined();
  });

  it('should move operation from one index to another', () => {
    const initialState = [makeOperation(1), makeOperation(2), makeOperation(3)];
    const newState = reducer(initialState, move({ id: 2, toIdx: 0 }));
    expect(selectPatterns(newState).findIndex((op) => op.id === 2)).toBe(0);

    const newState2 = reducer(initialState, move({ id: 2, toIdx: 2 }));
    expect(selectPatterns(newState2).findIndex((op) => op.id === 2)).toBe(2);
  });

  it('should set pattern string', () => {
    const newState = reducer(
      initialState,
      setPattern({ id: 1, pattern: 'hai' })
    );
    expect(selectOperationPattern(newState, 1)).toBe('hai');
  });

  it('should set flags', () => {
    const newState = reducer(
      initialState,
      setFlags({ id: 1, flags: ['m', 'i'] })
    );
    expect(selectOperationFlags(newState, 1)).toEqual(['m', 'i']);
  });

  it('should set listFormat string', () => {
    const newState = reducer(
      initialState,
      setListFormat({ id: 1, listFormat: '<< $& >>' })
    );
    expect(selectOperationListFormat(newState, 1)).toBe('<< $& >>');
  });

  it('should set replace string', () => {
    const newState = reducer(
      initialState,
      setReplace({ id: 1, replace: '<< $& >>' })
    );
    expect(selectOperationReplace(newState, 1)).toBe('<< $& >>');
  });
});
