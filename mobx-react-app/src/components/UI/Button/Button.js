import React from "react";
import { Button as Btn } from "react-bootstrap";
import classes from "./Button.scss";

const Button = (props) => {
  return (
    <Btn
      disabled={props.disabled}
      className={[classes.Button, props.btnClass]}
      onClick={props.clickHandler}
      type={props.btnType}
      variant={props.btnVariant}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
