import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getHandSize= createSelector(matchState, state => state.handSize);
export const getMarket= createSelector(matchState, state => state.market);
export const getUserHand= createSelector(matchState, state => state.userHand);
