import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getHandSize= createSelector(matchState, state => state.handSize);
export const getMarketArray= createSelector(matchState, state => state.marketArray);
export const getUserHandArray= createSelector(matchState, state => state.userHandArray);
