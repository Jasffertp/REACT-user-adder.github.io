import React from "react";
import { Helmet } from "react-helmet";
import classes from "./ErrorMessage.module.css";

function ErrorMessage(props) {
  const closeError = () => props.closeError(false);
  return (
    <div onClick={closeError} className={classes.modal}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className={classes["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes["modal-header"]}>
          <h2 className={classes["modal-title"]}>Invalid Input</h2>
        </div>
        <div className={classes["modal-body"]}>
          <p>Please enter a valid value!</p>
        </div>
        <div className={classes["modal-footer"]}>
          <button onClick={closeError} className={classes.button}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
