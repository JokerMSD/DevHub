/* eslint-disable no-unused-vars */
import { forwardRef } from "react";
import Style from "./style.module.scss";


export const InputSelect = forwardRef(({ error, label, values, value, id, onChange, ...rest }, ref) => {


    return (
        <div className={Style.inputSelectContainer}>
          <label className={Style.label}>{label}</label>
          <select id={id} className={Style.inputSelect} value={value} onChange={onChange}>
            {values.map((value) => (
                <option key={value} value={value}>
               {value}
            </option>
           ))}
          </select>
        </div>
    );
  },
);