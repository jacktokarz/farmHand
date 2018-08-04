import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getHandSize= createSelector(matchState, state => state.handSize);
export const getMarketArray= createSelector(matchState, state => state.marketArray);
export const getMatchPlayers= createSelector(matchState, state => state.matchPlayers);
export const getPlayerOneDeck= createSelector(matchState, state => state.playerOneDeck);
export const getPlayerOneDiscard= createSelector(matchState, state => state.playerOneDiscard);
export const getPlayerOneHand= createSelector(matchState, state => state.playerOneHand);
export const getPlayerOneUser= createSelector(matchState, state => state.playerOneUser);
export const getPlayerTwoDeck= createSelector(matchState, state => state.playerTwoDeck);
export const getPlayerTwoDiscard= createSelector(matchState, state => state.playerTwoDiscard);
export const getPlayerTwoHand= createSelector(matchState, state => state.playerTwoHand);
export const getPlayerTwoUser= createSelector(matchState, state => state.playerTwoUser);
export const getPlayerThreeDeck= createSelector(matchState, state => state.playerThreeDeck);
export const getPlayerThreeDiscard= createSelector(matchState, state => state.playerThreeDiscard);
export const getPlayerThreeHand= createSelector(matchState, state => state.playerThreeHand);
export const getPlayerThreeUser= createSelector(matchState, state => state.playerThreeUser);
export const getThisPlayer= createSelector(matchState, state => state.thisPlayer);
export const getUserDeckArray= createSelector(matchState, state => state.marketArray);
export const getUserHandArray= createSelector(matchState, state => state.userHandArray);
export const getUserPlayerNumber= createSelector(matchState, state => state.userPlayerNumber);
