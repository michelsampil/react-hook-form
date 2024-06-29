import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} />
    </div>
  );
};

export default Input;

// Create deeply nested components that will
// use the form context to register their inputs.
