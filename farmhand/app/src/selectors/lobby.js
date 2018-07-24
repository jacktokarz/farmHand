import { createSelector } from 'reselect';

const getLobbyState= state => state.lobby

export const getMatches= createSelector(getLobbyState, state => state.matches);