import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-dom";
import axiosWithAuth from "../axiosWithAuth";

const Login = props => {
  // console.log("Login", props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  // console.log("Cred",credentials);

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post("http:localhost:5000/api/login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={credentials.username}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <div className="loading">
          {isLoading && (
            <>
              <h2>Loading....</h2>
              <Loader type="Hearts" color="red" height={80} width={80} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
