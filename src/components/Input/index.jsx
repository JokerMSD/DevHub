/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useState } from "react";
import Style from "./style.module.scss";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const Input = forwardRef(
  ({ error, noHaveSlash, noEye, type, label, id, ...rest }, ref) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const viewPassword = () => {
      setPasswordVisible(true);
      const password = document.querySelector(`input[name=${id}]`);
      if (password.type === "password") {
        password.type = "text";
      }
    };

    const hidePassword = () => {
      setPasswordVisible(false);
      const password = document.querySelector(`input[name=${id}]`);
      if (password.type === "text") {
        password.type = "password";
      }
    };

    return (
      <div className={Style.inputContainer}>
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>

        <div className={Style.inputDiv}>
          <input type={type} ref={ref} {...rest} />

          <BsEyeFill
            onClick={viewPassword}
            className={`${Style.eye} ${
              noEye || isPasswordVisible ? Style.hidden : ""
            }`}
          />

          <BsEyeSlashFill
            onClick={hidePassword}
            className={`${Style.eyeSlashed} ${
              noHaveSlash || !isPasswordVisible ? Style.hidden : ""
            }`}
          />
        </div>
        {error ? <p className={Style.error}>{error.message}</p> : null}
      </div>
    );
  },
);
