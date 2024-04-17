import React from "react";
import Card from "../context";
import { UserContext } from "../index.js";

/**
 * Represents a component for deposit functionality.
 * @returns {JSX.Element} The deposit component.
 */
export default function Deposit() {
  const [show, setShow] = React.useState(false);
  const [deposit, setDeposit] = React.useState("");
  const [status, setStatus] = React.useState(
    "Please log in for managing your account balance"
  );
  const ctx = React.useContext(UserContext);

  /**
   * Validates the user and updates the show state and status message.
   * If the user is logged in and show state is false, it sets the show state to true and clears the status message.
   * If the user does not have a balance property, it sets the balance to 0.
   * @param {Object} user - The user object.
   */
  function validateUser(user) {
    if (ctx.loggedUser && !show) {
      setShow(true);
      setStatus("");
      if (!user.hasOwnProperty("balance")) {
        user.balance = 0;
      }
    }
  }

  /**
   * Clears the deposit form by setting the deposit state to 0.
   */
  function clearForm() {
    setDeposit(0);
  }

  // Get the user object from the context based on the loggedUser email
  var user = ctx.users.filter((item) => item.email === ctx.loggedUser)[0];

  // Validate the user
  validateUser(user);

  /**
   * Handles the deposit action by updating the user's balance and clearing the deposit form.
   */
  function handleDeposit() {
    user.balance = user.balance + Number(deposit);
    clearForm();
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            <p style={{ width: "50%", float: "left" }}>Balance</p>
            <p style={{ width: "50%", float: "right" }}>
              ${user ? user.balance : NaN}
            </p>
            Deposit amount
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit amount"
              value={deposit}
              min={0}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={deposit <= 0}
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Important!</h5>
          </>
        )
      }
    />
  );
}
