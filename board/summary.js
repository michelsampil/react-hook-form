// Install the library

// - npm install react-hook-form
// - yarn add react-hook-form

// ⭐ 0. useForm Hook
// When setting up useForm, you typically import it and destructure necessary methods and properties:

import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid, isSubmitting },
    watch,
    reset,
    clearErrors,
    trigger,
    getValues,
    setError,
    clearErrors,
    handleSubmit,
    control,
  } = useForm();
}

// ⭐ 1. register
// The register function is used to register input elements with the useForm hook. It connects input fields to the form state and validation rules.
// Usage: You spread its return value onto your input components to bind them to the form state.

<input {...register("firstName", { required: true })} />;

// ⭐ 2. handleSubmit
// The handleSubmit function is used to handle form submissions. It takes a callback function that receives the form data when the form is submitted.
// Usage: Attach it to the <form> element's onSubmit prop.

const onSubmit = (data) => {
  console.log(data); // Process form data
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* Form inputs */}
    <input {...register("firstName", { required: true })} />
    {/* Submit button */}
    <button type="submit">Submit</button>
  </form>
);

// ⭐ 3. setValue
// The setValue function allows you to programmatically set values for form fields. It's useful for pre-populating form fields or updating form values dynamically.
// Usage: Call setValue with the field name and value.

setValue("firstName", "John"); // Sets 'firstName' field to 'John'

// ⭐ 4. formState
// The formState object provides various properties that reflect the current state of the form:
// errors: Object containing validation errors for each field.

<span>{errors.firstName && "First name is required."}</span>;

// isDirty: Boolean indicating if the form has been modified.
if (isDirty) {
  // Enable form submission
}

// isValid: Boolean indicating if all form inputs are valid.
if (isValid) {
  // Enable form submission
}

// isSubmitting: Boolean indicating if the form is currently being submitted.
if (isSubmitting) {
  // Show loading indicator
}

// ⭐ 5. watch
// The watch function allows you to monitor changes to individual input fields or the entire form.
// Usage: Pass the field name to watch to get the current value.

const watchedValue = watch("fieldName");
console.log(watchedValue); // Logs current value of 'fieldName'

// ⭐ 6. reset
// The reset function clears all form values and resets validation errors. It's useful for implementing reset functionality in forms.
// Usage: Call reset to reset the form.

<button onClick={() => reset()}>Reset</button>;

// ⭐ 7. clearErrors
// The clearErrors function clears validation errors for specific fields or all fields.
// Usage: Pass the field name to clearErrors to clear errors for that field.

clearErrors("fieldName"); // Clears errors for 'fieldName'

// ⭐ 8. trigger
// The trigger function manually triggers validation for one or more fields.
// Usage: Pass the field name or an array of field names to trigger.

trigger("fieldName"); // Triggers validation for 'fieldName'

// ⭐ 9. getValues
// The getValues function returns the current values of all fields in the form.
// Usage: Call getValues to get an object with all field values.

const formValues = getValues();
console.log(formValues); // Logs all form field values

// ⭐ 10. setError
// The setError function allows you to manually set validation errors for specific fields.
// Usage: Pass the field name and error object to setError.

setError("fieldName", { type: "custom", message: "Custom error message" });

// ⭐ 11. control
// The control object provides additional control over the form state and configuration.
// Usage: Access control properties like isDirty, isSubmitting, etc., directly from control.

const { isDirty, isSubmitting } = control;

// ⭐ FormProvider and useFormContext
//
