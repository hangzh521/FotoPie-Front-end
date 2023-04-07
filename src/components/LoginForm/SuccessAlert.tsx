import { Alert } from "@mui/material";
import { FC } from "react";

interface SuccessAlertProps {
  message: string | null;
}

const SuccessAlert: FC<SuccessAlertProps> = ({ message }) => {
  return (
    <Alert variant="filled" severity="success" sx={{ mt: 2 }}>
      {message}
    </Alert>
  );
};

export default SuccessAlert;
