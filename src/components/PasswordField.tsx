import React, { useRef, useState } from "react";

interface PasswordProps {
  handleChange: (pass: string) => void;
}

export const PasswordField: React.FC<PasswordProps> = ({ handleChange }) => {
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(0); // 0 uninitialised, 1 error, 2 no error
  const inputHTML = document.getElementById('password') as HTMLElement;

  if (passError === 1) {
    inputHTML.style.borderBottom = "2px solid red";
  } else if (passError === 2) {
    inputHTML.style.borderBottom = "2px solid green";
  }
  return (
    <div className="form-group">
      <input
        className="field-input"
        type="password"
        name="password"
        id="password"
        required={true}
        onChange={(e) => {
          handleChange(e.target.value);
          setPass(e.target.value);
          pass.length < 8 ? setPassError(1) : setPassError(2);
        }}
        value={pass}
        placeholder="Password"
      />
      {passError ? (
        <div className="error-message">
          <small>Password must be longer than 8 characters!</small>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
