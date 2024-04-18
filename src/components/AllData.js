import React from "react";
import { UserContext } from "../index.js";
import "../../src/styles.css";

/**
 * Renders all data from the UserContext.
 * @returns {JSX.Element} The rendered component.
 */
export default function AllData() {
  const ctx = React.useContext(UserContext);
  const content = [];

  // Iterate through each user in the UserContext
  for (const user of ctx.users) {
    content.push(
      <tr key={ctx.users.indexOf(user)}>
        <th scope="row">{user.name}</th>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    );
  }

  let history = [];
  ctx.history.forEach((element) => {
    history.push(
      <tr key={ctx.history.indexOf(element) + 'tr'}>
        <td>{element}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>
        AllData <br />
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>

      <h1>
        Operations history
        <br />
      </h1>
      <table className="table">
        <tbody>{history}</tbody>
      </table>
    </>
  );
}
