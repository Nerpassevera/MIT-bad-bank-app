import React from "react";
import { UserContext } from "../index.js";
import '../../src/styles.css'

export default function AllData() {
  const ctx = React.useContext(UserContext);
  const content = [];
  for (const user of ctx.users){ 
    for (const item in user){
      content.push(
      <p className="grid-cell" key={user.name+'_'+item}>{user[item]}</p>
      )
    }
  }
  // console.log(content);
  return (
    <h1>
      AllData <br/>
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