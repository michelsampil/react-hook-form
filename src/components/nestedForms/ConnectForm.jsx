// ConnectForm.js
import { useFormContext } from "react-hook-form";

const ConnectForm = ({ children }) => {
  const methods = useFormContext();
  return children({ ...methods });
};

export default ConnectForm;

// Create a ConnectForm component that uses render props
// to pass down the form context to nested components.
