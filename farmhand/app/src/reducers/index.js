import { combineReducers } from 'redux';

import header from './header'
import lobby from './lobby'
import match from './match'

export default (combineReducers({ header, lobby, match }))