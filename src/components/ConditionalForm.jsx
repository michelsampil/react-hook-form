import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const ConditionalForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const [showAge, setShowAge] = useState(false);

  const watchShowAge = watch("showAge", false);

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
        <label>Show Age?</label>
        <input
          type="checkbox"
          {...register("showAge")}
          onChange={() => setShowAge(!showAge)}
        />
      </InputWrapper>
      {watchShowAge && (
        <InputWrapper>
          <label>Age</label>
          <input type="number" {...register("age")} />
        </InputWrapper>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConditionalForm;
