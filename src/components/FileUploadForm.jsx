import React from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

const FileUploadForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label>File Upload</label>
        <input type="file" {...register("file")} />
      </InputWrapper>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploadForm;
