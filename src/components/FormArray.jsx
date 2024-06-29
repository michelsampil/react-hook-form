import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const FormArray = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <InputWrapper key={field.id}>
          <label>Field {index + 1}</label>
          <input {...register(`fields.${index}.value`)} />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </InputWrapper>
      ))}
      <button type="button" onClick={() => append({ value: "" })}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormArray;
