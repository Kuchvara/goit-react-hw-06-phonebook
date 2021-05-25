// import React, {Component} from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList.container";
import Filter from "./Components/Filter/Filter.container";


const App = () => (
  <>
    <h1>Phonebook</h1>
    <Form />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </>
);


export default App;

// contacts: [
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},    
  // ]