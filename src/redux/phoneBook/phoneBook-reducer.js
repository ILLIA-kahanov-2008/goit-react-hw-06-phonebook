import { combineReducers } from 'redux';
import types from './phoneBook-types';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const isExists = state.some(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
      return isExists ? alert(`${payload.name} is already in contacts`)
        : [...state, payload];
    case types.REMOVE_CONTACT:
      return state.filter(({id}) => id !== payload.id);
    default:
      return state;
  }  
}

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;
    default:
      return state
  }
 
  
}


export default combineReducers({
  items,
  filter,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
