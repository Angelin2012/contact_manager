import React, { useState,useEffect } from "react";

function ContactForm({ contact, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contact) setForm(contact);
  }, [contact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: "", email: "", phone: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Your Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button type="submit">{form._id ? "Update" : "Add"}</button>
    </form>
  );
}
export default ContactForm;