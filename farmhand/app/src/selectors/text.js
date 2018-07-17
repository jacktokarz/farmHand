import { createSelector } from 'reselect';

const getTextState= state => state.text

export const getText= createSelector(getTextState, state => state.text);
export const saveText= createSelector(getTextState, state => state.dbText);