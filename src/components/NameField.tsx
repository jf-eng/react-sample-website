import React, { useRef, useState } from "react";

interface NameFieldProps {
  handleChange: (name: string) => void;
}

export const NameField: React.FC<NameFieldProps> = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [focus, setFocus] = useState(false);

  // Checks if currentRef item is in focus - not used but left as boilerplate
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (currentRef: Element | null) => {
    if (document.activeElement === currentRef) {
      console.log("Name field in focus");
      setFocus(true);
    } else {
      console.log("Name field not in focus");
      setFocus(false);
    }
  };

  return (
    <div className="form-group">
      <div className="field">
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          className="field-input"
          onChange={(e) => {
            handleChange(e.target.value);
            setName(e.target.value);
            name.length < 5 ? setNameError(true) : setNameError(false);
          }}
          value={name}
          ref={inputRef}
          onFocus={() => handleFocus(inputRef.current)}
          placeholder="Username"
        />
        {nameError ? (
          <div className="error-message">
            <small>Username must be longer than 5 characters!</small>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
