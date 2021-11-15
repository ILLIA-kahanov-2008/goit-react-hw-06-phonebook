// import { useState, useMemo } from "react";
// import { useLS } from '../../hooks/useLS';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import "./App.css";

function App() {
     return (
      <div className="App">
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div className="Contacts">
          <Filter />
          <ContactList/>
          </div>
      </div>
    );
  }

export default App;
