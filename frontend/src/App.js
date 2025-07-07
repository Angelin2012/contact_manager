import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {

  const [contacts,setContacts]=useState([]);
  const [editContact,setEditContact]=useState(null);

  const fetchContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  }
  useEffect(() => {fetchContacts();},[]);

  const saveContact=async(contact)=>{
    if (contact._id) {
      await axios.put(`http://localhost:5000/contacts/${contact._id}`, contact);

    } else {
      await axios.post('http://localhost:5000/contacts', contact);
     
    }
    fetchContacts();
    setEditContact(null);
  };
  const deleteContact= async(id)=>{
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  return (
<div style={{padding:20}}>

  <h1>Contact Manager</h1>
<ContactForm contact={editContact} onSave={saveContact} />
<ContactList contacts={contacts} onEdit={setEditContact} onDelete={deleteContact} />

</div>
  );
}

export default App;