import { forwardRef, useContext, useState } from "react";
import Style from "./style.module.scss";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { PasswordContext } from "../../providers/PasswordStateContext";

export const Input = forwardRef(
  ({ error, noHaveSlash, noEye, type, label, id, ...rest }, ref) => {
    const { viewPassword, hidePassword } = useContext(PasswordContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleViewPassword = () => {
      viewPassword(id);
      setShowPassword(true);
    };

    const handleHidePassword = () => {
      hidePassword(id);
      setShowPassword(false);
    };

    return (
      <div className={Style.inputContainer}>
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>

        <div className={Style.inputDiv}>
          <input type={type} ref={ref} {...rest} />

          {showPassword ? (
            <BsEyeFill
              onClick={handleHidePassword}
              className={`${Style.eye} ${noEye ? Style.hidden : ""}`}
            />
          ) : (
            <BsEyeSlashFill
              onClick={handleViewPassword}
              className={`${Style.eyeSlashed} ${
                noHaveSlash ? Style.hidden : ""
              }`}
            />
          )}
        </div>
        {error ? <p className={Style.error}>{error.message}</p> : null}
      </div>
    );
  },
);