import { useForm, FormProvider } from "react-hook-form";
import ConnectForm from "./ConnectForm";
import Input from "./Input";
import { InputWrapper } from "../InputWrapper";

const MainForm = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ConnectForm>
          {({ register, errors }) => (
            <>
              <InputWrapper>
                <label>First Name</label>
                <Input name="firstName" />
              </InputWrapper>
              <InputWrapper>
                <label>First Name</label>
                <Input name="lastName" />
              </InputWrapper>

              <button type="submit">Submit</button>
            </>
          )}
        </ConnectForm>
      </form>
    </FormProvider>
  );
};

export default MainForm;

// Create a main form component that uses FormProvider
// to wrap the form and pass down the context.
