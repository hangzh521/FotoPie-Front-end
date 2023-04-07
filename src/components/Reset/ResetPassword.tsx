import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { createResetPassword } from "../../axiosRequest/api/reset";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { Schema, string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "../LoginForm/FormTextField";
import ErrorAlert from "../LoginForm/ErrorAlert";
import SuccessAlert from "../LoginForm/SuccessAlert";

interface IFormPassword {
  password: string;
}

const ResetPassword = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const formSchema: Schema<IFormPassword> = object({
    password: string().min(2).max(20).required(),
  });

  const methods = useForm<IFormPassword>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormPassword> = async (data) => {
    const { password } = data;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      // Send POST request to api/reset/resetPassword
      const response = await createResetPassword({
        password,
        token,
      });
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      //redirecting page based on server response code
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {errorMessage && <ErrorAlert error={errorMessage} />}
      {successMessage && <SuccessAlert message={successMessage} />}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Password
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={methods.handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormTextField
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>Please create a new password and keep it safely</p>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default ResetPassword;
