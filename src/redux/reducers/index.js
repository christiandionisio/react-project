import { combineReducers } from 'redux';
import platos from './platos'
import usuarios from './usuarios'
import recibos from './recibos'
import auth from './auth'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    platos,
    usuarios,
    recibos,
    auth
  });

  return rootReducer;
}