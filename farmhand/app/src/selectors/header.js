import { createSelector } from 'reselect';

const headerState= state => state.header;

export const getHeaderButtonText= createSelector(headerState, state => state.buttonText);
export const getLoginModalVis= createSelector(headerState, state => state.loginModalVis);
export const getErrorMessage= createSelector(headerState, state => state.errorMessage);
export const getUsername= createSelector(headerState, state => state.username);
export const getPassword= createSelector(headerState, state => state.password);