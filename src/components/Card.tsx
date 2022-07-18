import React from "react";
import { UserDetails } from "../utils";
import { useState } from "react";
import { NameField } from "./NameField";
import { PasswordField } from "./PasswordField";

interface CardProps {
  login: (details: UserDetails) => void;
  error: boolean;
}

export const Card: React.FC<CardProps> = ({ login, error }) => {
  const [details, setDetails] = useState<UserDetails>({
    name: "",
    password: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stops default action of element from happening

    login(details);
  };

  /*
  To pass data from child to parent, pass function as prop to child.
  Call that function in the child component.
  */
  const handleNameChange = (name: string) => {
    setDetails({ ...details, name: name });
  };
  const handlePassChange = (password: string) => {
    setDetails({ ...details, password: password });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="card">
        <h2>Welcome!</h2>
        {error ? (
          <div className="login-fail">
            <h3>Details are incorrect!</h3>
          </div>
        ) : (
          ""
        )}
        <NameField handleChange={handleNameChange}></NameField>
        <PasswordField handleChange={handlePassChange}></PasswordField>

        <input className="form-button" type="submit" value="Login" />
      </div>
    </form>
  );
};
