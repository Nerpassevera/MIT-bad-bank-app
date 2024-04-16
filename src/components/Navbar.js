import React from 'react';
import BankLogo from '../BadBank-logo.jpg';

export default function NavBar(){
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={BankLogo} alt="Bad Bank logo" href="#" width="70"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount">Create Account</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/withdraw">Withdraw</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#/alldata">All Data</a>
            </li>

          </ul>

          
        </div>
      </div>
    </nav>


  );
}