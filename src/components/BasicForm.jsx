import React from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const BasicForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label>Name</label>
        <input {...register("name")} />
      </InputWrapper>
      <InputWrapper>
        <label>Email</label>
        <input {...register("email")} />
      </InputWrapper>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
