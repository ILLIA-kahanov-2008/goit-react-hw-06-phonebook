import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })]

  const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};


const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, phoneBookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
},
)

const persister = persistStore(store);

// eslint-disable-next-line
export default { store, persister };



// -----without toolkit-----

// import { createStore, combineReducers} from 'redux'; //
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phoneBookReducer from './phoneBook/phoneBook-reducer';


// const rootReducer = combineReducers({
//   contacts: phoneBookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
