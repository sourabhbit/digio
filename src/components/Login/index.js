import React, { useState } from "react";
import { staticText } from "../../constants";
import "./styles.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailInput = value => {
    if (!validateEmail(value)) {
      setError("Please enter a valid email id");
    } else {
      setError("");
    }
    setEmail(value);
  };

  const checkButtonEnable = () => {};
  const handleNextSteps = () => {};

  return (
    <div className="authenticationStepsWrapper">
      <label>Proceed with your email address</label>
      <input
        type="text"
        onChange={e => handleEmailInput(e.target.value)}
        value={email}
      />
      {error && <p>{error}</p>}

      <p>
        By Continuing, I confirm to the Term and Service and Privacy policy of
        Digio.in
      </p>
      <button
        onClick={() => props.nextCounter()}
        disabled={email.length > 1 && !validateEmail(email)}
        className={
          email.length > 1 && validateEmail(email) ? "active" : "nonactive"
        }
      >
        CONTINUE
      </button>
    </div>
  );
}
