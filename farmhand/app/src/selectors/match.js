import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalId= createSelector(matchState, state => state.cardModalId);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getMarketArray= createSelector(matchState, state => state.marketArray);
export const getMatchPlayers= createSelector(matchState, state => state.matchPlayers);
export const getNextPlayerDeck= createSelector(matchState, state => state.nextPlayerDeck);
export const getNextPlayerDiscard= createSelector(matchState, state => state.nextPlayerDiscard);
export const getNextPlayerHand= createSelector(matchState, state => state.nextPlayerHand);
export const getNextPlayerUser= createSelector(matchState, state => state.nextPlayerUser);
export const getPreviousPlayerDeck= createSelector(matchState, state => state.previousPlayerDeck);
export const getPreviousPlayerDiscard= createSelector(matchState, state => state.previousPlayerDiscard);
export const getPreviousPlayerHand= createSelector(matchState, state => state.previousPlayerHand);
export const getPreviousPlayerUser= createSelector(matchState, state => state.previousPlayerUser);
export const getUserDeck= createSelector(matchState, state => state.userDeck);
export const getUserDiscard= createSelector(matchState, state => state.userDiscard);
export const getUserHand= createSelector(matchState, state => state.userHand);
export const getUser= createSelector(matchState, state => state.user);
export const getUserPlayerNumber= createSelector(matchState, state => state.userPlayerNumber);
