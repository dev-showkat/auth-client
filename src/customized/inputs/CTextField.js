import { TextField } from "@mui/material";
import { Field } from "formik";

export const CTextField = ({ name, label, type = "text" }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <TextField
          id={name}
          {...field}
          size="small"
          label={label}
          fullWidth
          type={type}
          autoComplete="on"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  );
};
