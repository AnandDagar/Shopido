import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission here
    }
  };

  return (
    <div className="contact-us-page">
      <h1 className="title">Contact Us</h1>
      <div className="contact-info">
        <p>Contact Information</p>
        <p>Fill up the form and our team will get back with you within 24 hours.</p>
        <p>34B Glenbarry Rd, Campbellfield VIC 3061, Australia</p>
        <p>+61 430 391 091</p>
        <p>info@somoorish.com.au</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && (
            <span className="error">{formErrors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && (
            <span className="error">{formErrors.lastName}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {formErrors.phone && (
            <span className="error">{formErrors.phone}</span>
          )}
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <br /><br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
