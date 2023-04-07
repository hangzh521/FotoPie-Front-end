import { FC } from "react";
import TextField from "@mui/material/TextField";
import { FieldError, useFormContext } from "react-hook-form";


interface IFormTextFieldProps {
  label: string;
  name: string;
  id: string;
  type?: string;
  autoComplete?: string;
  InputProps?: any;
}

const FormTextField: FC<IFormTextFieldProps> = ({
  label,
  name,
  id,
  type,
  InputProps,
}: IFormTextFieldProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <TextField
        label={label}
        id={id}
        error={!!errors[name]}
        helperText={(errors[name] as FieldError)?.message ?? ""}
        type={type}
        disabled={isSubmitting}
        fullWidth
        margin="normal"
        variant="outlined"
        autoFocus
        {...register(name)}
        InputProps={InputProps}
      />
    </>
  );
};

export default FormTextField;
