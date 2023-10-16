import { forwardRef } from "react";
import Style from "./style.module.scss";

export const Input = forwardRef(({ label, id, ...rest }, ref) => {
    return (
        <div>
            <label className={Style.label} htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
        </div>
    );
});