import types from './phoneBook-types';
import shortid from 'shortid';

const addNewContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid(),
    name,
    number,
  },
});

const removeContact = (id) => ({  
  type: types.REMOVE_CONTACT,
  payload: {
    id,
  },
})

const filteringValue = (value) => ({
  type: types.FILTER_CHANGE,
  payload: value
  
})

// eslint-disable-next-line
export default { addNewContact, removeContact, filteringValue };
