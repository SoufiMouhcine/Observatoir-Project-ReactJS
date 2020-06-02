import React, {Component} from "react";
import {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Authentification/auth";


function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const[login, setLogin]=useState({username:'', password:''})
  const { setAuthTokens } = useAuth();

  function submitHandler(e) {
    e.preventDefault()
    console.log(login)
    axios.post('https://observatoire-aseds.herokuapp.com/authenticate',login)
    .then(result=>{
      if (result.status === 200) {
        setAuthTokens(result.data);
        console.log(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
        console.log("error");
      }
    })
    .catch((e) => {
      setIsError(true);
      console.log(e);
    });
    }



  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <form>
      <h3>Connectez Vous au compte de votre coopérative</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          value={login.username}
          onChange={e => setLogin({ ...login, username:e.target.value})}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={login.password}
          onChange={e => setLogin({  ...login, password:e.target.value})}
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={submitHandler}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>

    
    </form>
  );
}

export default Login;
