import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const style = {
  margin: "1rem 0 1rem 0",
  padding: "20px",
  borderRadius: "10px",
  border: "solid 3px #9D00FF",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "black",
  color: "var(--card-text-color)",
  transition: "background-color 0.3s, color 0.3s",
};

const FieldArray = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id} style={style}>
          <InputWrapper>
            <label>Name</label>
            <input {...register(`users.${index}.name`)} />
          </InputWrapper>

          <InputWrapper>
            <label>Email</label>
            <input {...register(`users.${index}.email`)} />
          </InputWrapper>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", email: "" })}>
        Add User
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FieldArray;
