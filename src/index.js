import createAll from './createAll'
import plainStructure from './structure/plain'

/**
 * 默认以 plain object 的形式维护 store
 */
export const {
  LOCATION_CHANGE,
  CALL_HISTORY_METHOD,
  push,
  replace,
  go,
  goBack,
  goForward,
  routerActions,
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
  getLocation,
  getAction,
  createMatchSelector,
} = createAll(plainStructure)
