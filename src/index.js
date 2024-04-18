import { Route, Routes, HashRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AllData from './components/AllData';
import CreateAccount from "./components/CreateAccount";
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Withdraw from './components/Withdraw';

export const UserContext = React.createContext(null);
export default function Spa() {
  return (
    <>
      <HashRouter>
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "mira",
                email: "mira@mit.edu",
                password: "secret1",
                balance: 200,
              },
              {
                name: "john",
                email: "john@mit.edu",
                password: "secret2",
                balance: 180,
              },
            ],
            loggedUser: undefined,
            history:[]
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Spa />);


