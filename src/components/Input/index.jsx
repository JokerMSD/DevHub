import { forwardRef } from "react";
import Style from "./style.module.scss";

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className={Style.inputContainer}>
            <label className={Style.label} htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <p className={Style.error}>{error.message}</p> : null}
        </div>
    );
});