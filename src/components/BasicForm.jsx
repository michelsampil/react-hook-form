import React from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";
import { useToast } from "../context/ToastContext";
import Toast from "./toast/Toast";
const BasicForm = () => {
  const { register, handleSubmit } = useForm();
  const { showToast, toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    showToast("Submiting...");
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
      {toast.show && <Toast message={toast.message} />}
    </form>
  );
};

export default BasicForm;
