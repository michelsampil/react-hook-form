// AdvancedForm.js
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const options = [
  { value: "chocolate", label: "Chocolate 🍫" },
  { value: "strawberry", label: "Strawberry 🍓" },
  { value: "vanilla", label: "Vanilla 🍦" },
];

const AdvancedForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="flavor">Favorite Flavor</label>
        <Controller
          name="flavor"
          control={control}
          render={({ field }) => (
            <select {...field} id="flavor">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      </InputWrapper>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
