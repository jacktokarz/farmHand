import { createSelector } from 'reselect';

const headerState= state => state.header;

export const getHeaderButtonText= createSelector(headerState, state => state.buttonText);
export const getLoginModalVis= createSelector(headerState, state => state.loginModalVis);
export const getErrorMessage= createSelector(headerState, state => state.errorMessage);
export const getUser= createSelector(headerState, state => state.user);
export const getUsername= createSelector(headerState, state => state.username);
export const getPassword= createSelector(headerState, state => state.password);
export const getRegisterModalVis= createSelector(headerState, state => state.registerModalVis);
export const getRegisterErrorMessage= createSelector(headerState, state => state.registerErrorMessage);
export const getConfirmPassword= createSelector(headerState, state => state.confirmPassword);