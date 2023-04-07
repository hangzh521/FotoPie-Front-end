import { Alert } from "@mui/material";
import { FC } from "react";

interface ErrorAlertProps {
  error: string | null;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ error }: ErrorAlertProps) => {
  return (
    <Alert variant="filled" severity="error" sx={{ mt: 2 }}>
      {error}
    </Alert>
  );
};

export default ErrorAlert;
