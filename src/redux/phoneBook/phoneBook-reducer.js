import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import actions from './phoneBook-actions' 


const items = createReducer([], {
  [actions.addNewContact]: (state, { payload }) => {
    const isExists = state.some(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
      return isExists ? alert(`${payload.name} is already in contacts`)
        : [...state, payload];
  },
  [actions.removeContact]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload)
})


const filter = createReducer('',
  {
    [actions.filteringValue]: (_, { payload }) => payload,
  }
)

export default combineReducers({
  items,
  filter,
});




// -----without toolkit-----
// import { combineReducers } from 'redux';
// import types from './phoneBook-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const isExists = state.some(
//         (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
//       )
//       return isExists ? alert(`${payload.name} is already in contacts`)
//         : [...state, payload];
//     case types.REMOVE_CONTACT:
//       return state.filter(({id}) => id !== payload.id);
//     default:
//       return state;
//   }  
// }

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;
//     default:
//       return state
//   }  
// }

// export default combineReducers({
//   items,
//   filter,
// });
