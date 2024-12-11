import React, { useState } from 'react';
import './App.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [msg, setMsg] = useState('');
  const [msgColor,setMsgColor] = useState('Msg-Green');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = handleFormValidations()
    if(!isValid){
      return
    }
    setMsg("");
    setMsgColor('Msg-Green')
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwcxZjwachDcYaoCXDAkqK2W7wHCziURWqfcbnYuPuneZ9fG93Q9cIkCGumW3ieZAJd/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => {
        setMsg('Message sent successfully 😁');
        setTimeout(() => {
          setMsg('');
        }, 5000);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error!', error.message)
        setMsgColor('Msg-Red')
        setMsg('Oops! Something went wrong ☹️');
        setTimeout(() => {
          setMsg('');
        }, 5000);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
      
    );
  };

  const handleFormValidations=()=>{
    let isValid =  true;
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setMsgColor('Msg-Red')
    if(['',null,undefined].includes(formData.name.trim())){
      isValid = false;
      setMsg("Name can't be blank");
      return isValid
    }
    if(['',null,undefined].includes(formData.email.trim())){
      isValid = false;
      setMsg("Email can't be blank");
      return isValid
    }
    if(['',null,undefined].includes(formData.message.trim())){
      isValid = false;
      setMsg("Message can't be blank");
      return isValid
    }
    isValid = regex.test(formData.email.trim());
    if(!isValid){
      setMsg("Please enter valid Email ID");
    }
    return isValid
  }
  return (
    <div>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          // required
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          // required
        />
        <button className='btn-submit' type="submit">Submit</button>
      </form>
      {msg && <span className ={msgColor} id="msg">{msg}</span>}
    </div>
  );
};

export default ContactForm;