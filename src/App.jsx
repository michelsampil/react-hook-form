import React from "react";
import BasicForm from "./components/BasicForm";
import ValidationForm from "./components/ValidationForm";
import AdvancedForm from "./components/AdvancedForm";
import ConditionalForm from "./components/ConditionalForm";
import FormArray from "./components/FormArray";
import FieldArray from "./components/FieldArray";
import CustomValidationForm from "./components/CustomValidationForm";
import NestedForm from "./components/NestedForm";
import FileUploadForm from "./components/FileUploadForm";
import MainForm from "./components/nestedForms/MainForm";
import FormCard from "./components/formCard/FormCard";
import { ToastProvider } from "./context/ToastContext";
import Toast from "./components/toast/Toast";
import { useToast } from "./context/ToastContext";

const App = () => {
  return (
    <ToastProvider>
      <div>
        <h1>React Hook Form Examples</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <FormCard>
            <h2>Basic Form</h2>
            <BasicForm />
          </FormCard>
          <FormCard>
            <>
              <h2>Validation Form</h2>
              <ValidationForm />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Advanced Form</h2>
              <AdvancedForm />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Conditional Form</h2>
              <ConditionalForm />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Form Array</h2>
              <FormArray />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Field Array</h2>
              <FieldArray />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Custom Validation Form</h2>
              <CustomValidationForm />
            </>
          </FormCard>
          <FormCard>
            <>
              <h2>Nested Form</h2>
              <NestedForm />
            </>
          </FormCard>

          <FormCard>
            <>
              <h2>File Upload Form</h2>
              <FileUploadForm />
            </>
          </FormCard>

          <FormCard>
            <>
              <h2>React Hook Form with ConnectForm</h2>
              <MainForm />
            </>
          </FormCard>
        </div>
      </div>
    </ToastProvider>
  );
};

export default App;
