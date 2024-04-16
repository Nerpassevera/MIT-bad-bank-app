import React from "react";
import Card from "../context";
import { UserContext } from "../index.js";

export default function Deposit() {
  const [show, setShow] = React.useState(false);
  const [deposit, setDeposit] = React.useState('');
  const [status, setStatus] = React.useState('Please log in for managing your account balance');
  const ctx = React.useContext(UserContext);

  function validateUser(user){
    if (ctx.loggedUser && !show) {
      setShow(true);
      setStatus('');  
      if (!user.hasOwnProperty('balance')){
       user.balance = 0;
     }
    }
  }

  function clearForm() {
    setDeposit(0);
  }

  
  var user = ctx.users.filter( item => item.email === ctx.loggedUser)[0]; 
  
  validateUser(user);

  
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
            <p style={{width: "50%", float: "left"}}>Balance</p>
            <p style={{width: "50%", float: "right"}}>${user ? user.balance : NaN}</p>

            Deposit amount
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit amount"
              value={deposit}
              min={0}
              onChange={ (e) => setDeposit(e.currentTarget.value)}
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
