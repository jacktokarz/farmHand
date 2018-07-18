import { createSelector } from 'reselect';

const headerState= state => state.header

export const getHeaderButtonText= createSelector(headerState, state => state.buttonText);