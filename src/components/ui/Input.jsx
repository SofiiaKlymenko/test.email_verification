import * as React from "react";
import "./Input.css";
import { useController } from "react-hook-form";
import errorLogo from "../../assets/ic_outline-error.svg";

export const Input = (props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: { value: true, message: "field is required" },
      validate: props.validate,
      pattern: props.pattern,
    },
  });

  return (
    <div>
      <p className="label">{props.label}</p>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        placeholder={props.placeholder}
        className={invalid ? "input-error" : ""}
      />
      {invalid && (
        <p className="error"> <img className="error-logo" src={errorLogo} alt='error logo'/>{props.errorMessage || error.message}</p>
      )}
    </div>
  );
};
