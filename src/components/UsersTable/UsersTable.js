import React from "react";
import classes from "./UsersTable.module.css";

function UsersTable(props) {
  const users = props.users;
  return (
    <ul>
      {users.map((event) => (
        <li key={event.username}>
          <p>
            {event.username} ({event.age} years old)
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UsersTable;
