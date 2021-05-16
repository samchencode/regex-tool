import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const selectOperations = (state: RootState) => state.pattern.operations;
export const selectOperationIds = createSelector(selectOperations, (state) =>
  state.map((op) => op.id)
);
export const selectOperation = (state: RootState, id: number) =>
  state.pattern.operations.find((op) => op.id === id);
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
export const selectOperationColor = createSelector(
  selectOperation,
  (op) => op?.color
);

export const selectInput = (state: RootState) => state.pattern.input;
