import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '@/utils/history';
import { default as userReducer } from '../user/slice';

/**
 * 聚合所有 reducer
 */
const rootReducer = combineReducers({
  user: userReducer,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
