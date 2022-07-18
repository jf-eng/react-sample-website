import React, { useRef, useState } from "react";

interface NameFieldProps {
  handleChange: (name: string) => void;
}

export const NameField: React.FC<NameFieldProps> = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<number>(0); // 0 uninitialised, 1 error, 2 no error
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

  const inputHTML = document.getElementById('name') as HTMLElement;

  if (nameError === 1) {
    inputHTML.style.borderBottom = "2px solid red";
  } else if (nameError === 2) {
    inputHTML.style.borderBottom = "2px solid green";
  }

  return (
    <div className="form-group">
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          className="field-input"
          onChange={(e) => {
            handleChange(e.target.value);
            setName(e.target.value);
            name.length < 5 ? setNameError(1) : setNameError(2);
          }}
          value={name}
          ref={inputRef}
          onFocus={() => handleFocus(inputRef.current)}
          placeholder="Username"
        />
        {nameError===1 ? (
          <div className="error-message">
            <small>Username must be longer than 5 characters!</small>
          </div>
        ) : (
          ""
        )}
    </div>
  );
};
