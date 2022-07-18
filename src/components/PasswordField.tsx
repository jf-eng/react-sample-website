import React, { useState } from "react";

interface PasswordProps {
  handleChange: (pass: string) => void;
}

export const PasswordField: React.FC<PasswordProps> = ({ handleChange }) => {
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);

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
          pass.length < 8 ? setPassError(true) : setPassError(false);
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
