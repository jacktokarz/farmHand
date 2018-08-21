import { createSelector } from 'reselect';

const matchState= state => state.match;


export const getActivatedFactions= createSelector(matchState, state => state.activatedFactions);
export const getCardModalActions= createSelector(matchState, state => state.cardModalActions);
export const getCardModalData= createSelector(matchState, state => state.cardModalData);
export const getCardModalId= createSelector(matchState, state => state.cardModalId);
export const getCardModalVis= createSelector(matchState, state => state.cardModalVis);
export const getChoiceModalOptions= createSelector(matchState, state => state.choiceModalOptions);
export const getChoiceModalParentInfo= createSelector(matchState, state => state.choiceModalParentInfo);
export const getChoiceModalTitle= createSelector(matchState, state => state.choiceModalTitle);
export const getChoiceModalVis= createSelector(matchState, state => state.choiceModalVis);
export const getCurrentPlayerNumber= createSelector(matchState, state => state.currentPlayerNumber);
export const getMatchPath= createSelector(matchState, state => state.matchPath);
export const getMarketArray= createSelector(matchState, state => state.marketArray);
export const getNumberOfPlayers= createSelector(matchState, state => state.numberOfPlayers);
export const getPlayArea= createSelector(matchState, state => state.playArea);
export const getPlayerOne= createSelector(matchState, state => state.playerOne);
export const getPlayerTwo= createSelector(matchState, state => state.playerTwo);
export const getPlayerThree= createSelector(matchState, state => state.playerThree);
export const getTrashArray= createSelector(matchState, state => state.trashArray);
export const getUserHandSize= createSelector(matchState, state => state.userHandSize);
export const getUserPlayerNumber= createSelector(matchState, state => state.userPlayerNumber);
