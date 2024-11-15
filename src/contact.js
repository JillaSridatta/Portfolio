import React, { useState } from 'react';
import './App.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwcxZjwachDcYaoCXDAkqK2W7wHCziURWqfcbnYuPuneZ9fG93Q9cIkCGumW3ieZAJd/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        setMsg('Message sent successfully');
        setTimeout(() => {
          setMsg('');
        }, 5000);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {msg && <span id="msg">{msg}</span>}
    </div>
  );
};

export default ContactForm;