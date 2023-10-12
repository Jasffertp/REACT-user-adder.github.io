import React, { useState } from "react";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [inputData, setInputData] = useState({
    username: "",
    age: 0,
  });

  const addUserHandler = (event) => {
    event.preventDefault();

    inputData.username === "" || inputData.age <= 0
      ? props.errorHandler(true)
      : props.submitHandler(inputData);
  };

  const inputChangeHandler = (input, value) => {
    setInputData((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={addUserHandler} className={classes.form}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="username">Username</label>
            <input
              className="username"
              type="text"
              id="username"
              onChange={(event) =>
                inputChangeHandler("username", event.target.value)
              }
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="age">Age (In Years)</label>
            <input
              className="age"
              type="Number"
              id="age"
              onChange={(event) =>
                inputChangeHandler("age", +event.target.value)
              }
            />
          </p>
        </div>
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
