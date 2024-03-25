"use client";

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
  });

  const onInputChange = (event) => {
    const { name } = event.target;
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
    setErrors({
      firstNameError: "",
      lastNameError: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
    });

    if (formData.firstName?.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        firstNameError: "First Name is required",
      }));
    }

    if (formData.lastName?.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        lastNameError: "lastName is required",
      }));
    }
  };
  return (
    <section>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          value={formData.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />
        {errors.firstNameError && <div>{errors.firstNameError}</div>}
        <input
          type="text"
          value={formData.lastName}
          name="lastName"
          onChange={(event) => onInputChange(event)}
        />
        {errors.lastNameError && <div>{errors.lastNameError}</div>}
        <input type="submit" />

        <div>{formData.fullName}</div>
      </form>
    </section>
  );
}

export default Form;
