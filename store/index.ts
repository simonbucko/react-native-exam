
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import {chatReducer, userReducer, uiReducer, eventsReducer} from "./reducers"


const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
    ui: uiReducer,
    events: eventsReducer
  });

  export type RootState = ReturnType<typeof rootReducer>
  
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  export default store;