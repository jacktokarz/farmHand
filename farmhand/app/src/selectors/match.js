import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalId= createSelector(matchState, state => state.cardModalId);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getCurrentPlayer= createSelector(matchState, state => state.currentPlayer);
export const getMatchPath= createSelector(matchState, state => state.matchPath);
export const getMarketArray= createSelector(matchState, state => state.marketArray);
export const getMatchPlayers= createSelector(matchState, state => state.matchPlayers);
export const getNextPlayerDeck= createSelector(matchState, state => state.nextPlayerDeck);
export const getNextPlayerDiscard= createSelector(matchState, state => state.nextPlayerDiscard);
export const getNextPlayerHand= createSelector(matchState, state => state.nextPlayerHand);
export const getNextPlayer= createSelector(matchState, state => state.nextPlayer);
export const getPreviousPlayerDeck= createSelector(matchState, state => state.previousPlayerDeck);
export const getPreviousPlayerDiscard= createSelector(matchState, state => state.previousPlayerDiscard);
export const getPreviousPlayerHand= createSelector(matchState, state => state.previousPlayerHand);
export const getPreviousPlayer= createSelector(matchState, state => state.previousPlayer);
export const getUserColor= createSelector(matchState, state => state.userColor);
export const getUserCounters= createSelector(matchState, state => state.userCounters);
export const getUserDeck= createSelector(matchState, state => state.userDeck);
export const getUserDiscard= createSelector(matchState, state => state.userDiscard);
export const getUserHand= createSelector(matchState, state => state.userHand);
export const getUserPlayerNumber= createSelector(matchState, state => state.userPlayerNumber);
