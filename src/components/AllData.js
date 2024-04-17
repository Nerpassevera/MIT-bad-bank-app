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
    // Iterate through each property of the user object
    for (const item in user) {
      // Push a paragraph element with the user's property value to the content array
      content.push(
        <p className="grid-cell" key={user.name + "_" + item}>
          {user[item]}
        </p>
      );
    }
  }

  return (
    <h1>
      AllData <br />
      <div id="all-data-table">
        <h2 className="grid-header">Name</h2>
        <h2 className="grid-header">Email</h2>
        <h2 className="grid-header">Password</h2>
        <h2 className="grid-header">Balance</h2>
        {content}
      </div>
    </h1>
  );
}
