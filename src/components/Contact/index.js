import React, { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  //   validate email
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form
        className="d-flex flex-column pl-4 justify-content-center"
        id="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-column w-25">
          <label htmlFor="name">Name:</label>
          <input
            style={{ width: `300px;` }}
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column w-25">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-column w-25">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="w-25" type="submit" data-testid="button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
