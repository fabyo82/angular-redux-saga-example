import { createSelector } from 'reselect';

const counterSelector = state => state;

export const totalSelector = createSelector(
  counterSelector,
  (counter) => ({ total: counter * 5, counter })
);
