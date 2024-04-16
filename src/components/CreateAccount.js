import React from "react";
import Card from "../context";
import { UserContext } from "../index.js";

export default function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    // Validation for email field
    if (
      // If this is an email field
      field === email &&
      // If email format is correct
      !String(field)
        .toLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    )
      return false;
    return true;
  }

  const userExists = (newUserEmail) => {
    let condition = Boolean(
      ctx.users.filter((user) => user.email === newUserEmail.toLowerCase()).length > 0);
      
    if (condition) {
      setStatus("Error: user with this email already exists");
      setTimeout(() => setStatus(""), 3000);
      return true;
    }
    return false;
  };

  function handleCreate() {

    if (
      validate(name, "name") &&
      validate(email, "email") &&
      !userExists(email) &&
      validate(password, "password")
    ) {

      ctx.users.push({ name, email, password, balance: 100 });
      alert(`Account for user ${name} has been created`);
      clearForm();
      setShow(false);
    }
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              aria-describedby="inputGroup-sizing-default"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value.toLowerCase())}
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
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another user
            </button>
          </>
        )
      }
    />
  );
}