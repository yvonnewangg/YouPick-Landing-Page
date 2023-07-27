import React, { useState } from 'react';
import styles from '../style';

const FormsComponent = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundImage: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #ba2940 0.89%, #ab2b4c 17.23%, #8d2e55 42.04%, #753261 55.12%, #60346A 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const otherbuttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const largerTextStyle = {
    fontSize: '36px',
    flex: 1,
  };

  const mediumTextStyle = {
    fontSize: '30px',
    flex: 1,
  };

  // Handler function to toggle between B2C and B2B forms
  const handleToggleForm = () => {
    setIsBusiness((prevState) => !prevState);
  };

  // Handler function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBusiness) {
      // Perform form submission for B2B
      if (name && email && companyName) {
        // All required fields are filled, proceed with form submission
        console.log('B2B Form Submitted:', name, email, companyName);
        // Perform form submission for B2B here or make an API call
      } else {
        // Some fields are missing, show an error or do something
        alert('Please fill in all required fields.');
      }
    } else {
      // Perform form submission for B2C
      if (name && email) {
        // All required fields are filled, proceed with form submission
        console.log('B2C Form Submitted:', name, email);
        // Perform form submission for B2C here or make an API call
      } else {
        // Some fields are missing, show an error or do something
        alert('Please fill in all required fields.');
      }
    }
  };

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("#contactForm"); // Use the ID selector to select the form
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbz_LL0DLDAcx3RRHdKRHBx6RFoXTn51U99iQRjAFhyddB_lkLNXK3vJhUxbPXndLiDC/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={largerTextStyle}>
          Interested?
        </p>
        <button className='mt-2' style={{ ...otherbuttonStyle}} onClick={handleToggleForm}>
          {isBusiness ? 'Go back' : 'Want to market your business?'}
        </button>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        We'll let you know when our app comes out...
      </p>

      {/* Main Form */}
      <form id="contactForm" method="post" className="contact-form" onSubmit={(e) => Submit(e)}>
        <div className="row">
          <div className="col-md-6" style={{ textAlign: 'right' }}>
            <input
              type="text"
              className="medium-input"
              maxLength="50"
              placeholder="Name *"
              required={!isBusiness}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6" style={{ textAlign: 'right' }}>
            <input
              type="email"
              className="medium-input"
              maxLength="70"
              placeholder="E-mail *"
              required={!isBusiness}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isBusiness && (
            <div className="col-md-6" style={{ textAlign: 'right', width: '30%' }}>
              <input
                type="text"
                className="medium-input"
                maxLength="70"
                placeholder="Company Name *"
                required={isBusiness}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          )}
          <div className="col-md-6">
            <button style={buttonStyle} className="btn" type="submit">
              {isBusiness ? 'Submit B2B' : 'Submit B2C'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormsComponent;
