import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addNewContact = createAction('contacts/add',
  (name, number) => ({
    payload: {
    id: shortid.generate(),
    name,
    number,
  },
}))

const removeContact = createAction('contacts/remove');

const filteringValue = createAction('contacts/changeFilter');

// eslint-disable-next-line
export default { addNewContact, removeContact, filteringValue };




// -----without toolkit-----
// import types from './phoneBook-types';
// import shortid from 'shortid';

// const addNewContact = (name, number) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: shortid(),
//     name,
//     number,
//   },
// });

// const removeContact = (id) => ({  
//   type: types.REMOVE_CONTACT,
//   payload: {
//     id,
//   },
// })

// const filteringValue = (value) => ({
//   type: types.FILTER_CHANGE,
//   payload: value
  
// })

// // eslint-disable-next-line
// export default { addNewContact, removeContact, filteringValue };