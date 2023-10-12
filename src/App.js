import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersTable from "./components/UsersTable/UsersTable";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [usersTableData, setUsersTableData] = useState([]);
  const [inputError, setInputError] = useState(false);

  const submitHandler = (userData) => {
    setUsersTableData((prevInput) => {
      return [...prevInput, userData];
    });
  };

  const errorHandler = (status) => {
    setInputError(status);
  };

  return (
    <div>
      <AddUser submitHandler={submitHandler} errorHandler={errorHandler} />
      {usersTableData.length !== 0 && <UsersTable users={usersTableData} />}
      {inputError && (
        <ErrorMessage
          closeError={errorHandler}
          onClick={(e) => errorHandler(false)}
        />
      )}
    </div>
  );
}

export default App;
