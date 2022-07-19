import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

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

  const hidePassword = () => {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const show = document.getElementById("show-password") as HTMLElement;
    const hide = document.getElementById("hide-password") as HTMLElement;

    if(passwordInput?.type === "password"){
      passwordInput.type = "text";
      show.style.display = "none";
      hide.style.display = "block";
    }
    else{
      passwordInput.type = "password";
      show.style.display = "block";
      hide.style.display = "none";
    }
  };
  return (
    <div className="form-group">
      <FontAwesomeIcon className="icons" icon={faKey} />
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
      <span id="eye" onClick={hidePassword}>
        <FontAwesomeIcon className="eye-icon" id="show-password" icon={faEye} />
        <FontAwesomeIcon className="eye-icon" id="hide-password" icon={faEyeSlash} />
      </span>

      {passError===1 ? (
        <div className="error-message">
          <small>Password must be longer than 8 characters!</small>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
