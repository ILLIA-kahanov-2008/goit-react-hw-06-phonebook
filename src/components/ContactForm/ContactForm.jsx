import { useState} from "react";
import PropTypes from "prop-types";
// import shortid from "shortid";
import { connect } from "react-redux";
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions'

import styles from "./ContactForm.module.css";

function ContactForm ({addContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value)
        break;
    case "number":
        setNumber(value)
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    setName('');
    setNumber('');
    addContact(name, number);
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            placeholder="Enter new contact name"
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            placeholder="Enter new contact number"
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
}

const mapDispatchToProps = dispatch => ({
  addContact: (contactName, contactNumber) =>
    dispatch(phoneBookActions.addNewContact(contactName, contactNumber))
})

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

