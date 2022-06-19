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

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // if all is valid, open email
    if (!errorMessage) {
      window.location.href = `mailto:waingram96@gmail.com?subject=Contact%20from%20${formState.name}&body=${formState.message}`;
    }
  }

  return (
    <section className="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input

            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="email-input">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
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
