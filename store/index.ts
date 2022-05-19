
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import chatReducer from './reducers/chat.reducer';
import userReducer from './reducers/user.reducer';


const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
    // posts: PostReducer
  });
  export type RootState = ReturnType<typeof rootReducer>
  
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  export default store;