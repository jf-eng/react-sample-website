import React, { useState } from "react";
import { Card } from "./Card";
import { UserDetails } from "../utils";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const adminUser = {
    name: "hellothere",
    password: "hellothere",
  };

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // Handles authentication of login details
  const Login = (details: UserDetails) => {
    console.log(details);

    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      console.log("logged in!");
      setLoggedIn(true);
      setError(false);
    } else {
      console.log("Details are wrong!");
      setError(true);
    }
  };

  const Logout = () => {
    console.log("logout");
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        // If user is logged in
        <div className="welcome">
          <h2>Welcome!</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        // If user is not logged in
        <Card error={error} login={Login}></Card>
      )}
    </div>
  );
};
