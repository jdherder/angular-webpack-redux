import { combineReducers } from 'redux';
import example from './reducers/example.reducer';

export default function ($ngReduxProvider) {
  'ngInject';

  // combine reducers to create single global state
  const RootReducer = combineReducers({
    example,
  });

  // Redux 'middleware' to log state actions / resulting state
  const reduxLogger = store => next => action => {
    console.log('dispatching:', action);
    const result = next(action);
    console.log('next state:', store.getState());
    return result;
  };

  $ngReduxProvider.createStoreWith(RootReducer, [reduxLogger]);
}
