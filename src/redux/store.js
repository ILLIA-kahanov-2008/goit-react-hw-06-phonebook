import { createStore, combineReducers} from 'redux'; //
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phoneBook/phoneBook-reducer';


// const store = createStore(phoneBookReducer, composeWithDevTools());

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
