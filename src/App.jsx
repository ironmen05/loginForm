import React, { useState } from "react";
import  "./App.css";
import EmailInput from "./components/ElamanInput";

function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    age: "",
  });
  

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName) {
      errors.firstName = 'Поле "First Name" обязательно для заполнения';
    }

    if (!data.lastName) {
      errors.lastName = 'Поле "Last Name" обязательно для заполнения';
    }

    if (!data.email) {
      errors.email = 'Поле "Email" обязательно для заполнения';
    } else if (!isValidEmail(data.email)) {
      errors.email = "Введите корректный адрес электронной почты";
    }

    if (!data.password) {
      errors.password = 'Поле "Password" обязательно для заполнения';
    } else if (data.password.length < 6) {
      errors.password = "Пароль должен содержать больше чем 6 символов";
    }
    if (!data.address){
      errors.password = 'Поле не должно быть пустым';

    }
    if (!data.city){
      errors.city = 'Поле не должно быть пустым';
      
    }
    if (!data.age){
      errors.age = 'Поле не должно быть пустым';

    }



    return errors;
  };

  const isValidEmail = (email) => {
    return email.includes("@gmail.com")
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <EmailInput
          labelText="first name"
          // value={formData.firstName}
          onChange={handleChange}
          type="text"
        />
        {formErrors.firstName && (
          <div className="error">{formErrors.firstName}</div>
        )}

        <EmailInput
          labelText="LastName"
          // value={formData.lastName}
          onChange={handleChange}
          type="text"
        />
        {formErrors.lastName && (
          <div className="error">{formErrors.lastName}</div>
        )}

        <EmailInput
          labelText="Email "
          // value={formData.email}
          onChange={handleChange}
          type="text"
        />
        {formErrors.email && <div className="error">{formErrors.email}</div>}

        <EmailInput
          labelText="Password"
          // value={formData.password}
          onChange={handleChange}
          type="number"
        />
        {formErrors.password && (
          <div className="error">{formErrors.password}</div>
        )}

        <EmailInput
          labelText="Address"
          // value={formData.address}
          onChange={handleChange}
          type="text"
        />
        {formErrors.address && (
          <div className="error">{formErrors.address}</div>
        )}

        <EmailInput
          labelText="City"
          // value={formData.city}
          onChange={handleChange}
          type="text"
        />{formErrors.city && (
          <div className="error">{formErrors.city}</div>
        )}

        <EmailInput
          labelText="Age"
          // value={formData.age
          onChange={handleChange}
          type="number"
        />{formErrors.age && (
          <div className="error">{formErrors.age}</div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LoginForm;
