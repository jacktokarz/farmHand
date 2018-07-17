import { createSelector } from 'reselect';

const headerState= state => state.header

export const getHeaderButtonText= createSelector(headerState, state => state.buttonText);
export const getHeaderButtonAction= createSelector(headerState, state => state.buttonAction);
export const getHeaderGreeting= createSelector(headerState, state => state.greeting);