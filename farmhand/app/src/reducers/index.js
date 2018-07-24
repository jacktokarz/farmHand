import { combineReducers } from 'redux';

import header from './header'
import lobby from './lobby'

export default (combineReducers({ header, lobby }))