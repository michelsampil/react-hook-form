import React from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const validateUsername = async (username) => {
  const response = await fetch(
    `https://api.example.com/validate-username?username=${username}`
  );
  const data = await response.json();
  return data.isValid ? true : "Username is already taken";
};

const CustomValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label>Username</label>
        <input
          {...register("username", {
            required: true,
            validate: validateUsername,
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </InputWrapper>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomValidationForm;
