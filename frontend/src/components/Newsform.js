import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Card, Accordion, Spinner   } from 'react-bootstrap';


function Newsform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setErrors] = useState({});
 

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!number) {
      errors.number = 'Number is required';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  const [isActive, setActive] = useState(false);
  const handleSubmit = async (event) => {

    setActive(true)
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

 
    const response = await fetch('https://jovialtravels.com/sys/thank-you-popup.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formName : "popup Form",
        Name : name,
        Email: email,
        MobilePhone : number,
      })
    }).then((response) => response.json())
    .then( data =>{
        
        if (data.code == 200) {
        window.location.href = 'https://jovialtravels.com/thankyou.php';
        } else {
        window.location.href = 'https://jovialtravels.com/error.php';
        }
    }).catch((error) => {
        console.log('not work');
        console.log(error);
    });
    
  };

  return (
    <form className='popup_form' onSubmit={handleSubmit}>
        <input type="hidden" name="formType" value="2"  />
         <input type="hidden"  name="formName"  value="Popup Form" /> 
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="number">Mobile Number</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        {errors.number && <span>{errors.number}</span>}
      </div>
      <button className='bg-dark' type="submit">
      <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className= {isActive ? "spinnerSubmitactive" : "spinnerSubmitinactive"}
                    />
        Submit</button>
    </form>
  );
}

export default Newsform;