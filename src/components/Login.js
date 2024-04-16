import React from "react";
import Card from "../context.js";
import { UserContext } from "../index.js";

export default function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  console.log('Login module renders');

  React.useEffect(() => {
    if (ctx.loggedUser) {
      setShow(false);
      console.log('Login module: useEffect runs');
      }
    }, [ctx.loggedUser])

  function validate(){

    const emailMatched = ctx.users.filter( item => item.email === email).length === 1;
    const passwordlMatched = ctx.users.filter( item => item.password === password).length === 1;
    return emailMatched && passwordlMatched;
  }
  
  function handleLogin() {
    console.log('Login credentials: ',email, password);
    if (validate()) {
      ctx.loggedUser = email;
      setStatus("");
      setShow(false);
    }
    else {
      setStatus("Email or password is invalid");
      setTimeout(() => setStatus(''), 3500);
    }
  }

  return (
    <Card
      bgcolor="warning"
      header="Log in"
      status={status}
      body={
        show ? (
          <>
            Email
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Log in
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            {/* <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another user
            </button> */}
          </>
        )
      }
    />
  );
}

