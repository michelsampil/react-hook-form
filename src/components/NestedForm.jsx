import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";
const NestedForm = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputWrapper>
            <label>Name</label>
            <input {...register(`users.${index}.name`)} />
          </InputWrapper>

          <InputWrapper>
            <label>Email</label>
            <input {...register(`users.${index}.email`)} />
          </InputWrapper>

          <InputWrapper>
            <label>Phones</label>
            <div>
              {field.phones.map((phone, phoneIndex) => (
                <div key={phoneIndex}>
                  <input {...register(`users.${index}.phones.${phoneIndex}`)} />
                </div>
              ))}
              <button
                type="button"
                onClick={() => append({ phones: [...field.phones, ""] }, index)}
              >
                Add Phone
              </button>
            </div>
          </InputWrapper>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", email: "", phones: [""] })}
      >
        Add User
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NestedForm;
