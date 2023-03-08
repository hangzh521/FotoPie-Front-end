import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, SubmitHandler, FormProvider} from "react-hook-form";
import Copyright from "../src/components/Copyright";
import FormTextField from "../src/components/textField/formTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema, string, object } from "yup";
import { useRouter } from "next/router";
import axiosRequest from "../src/utils/axiosRequest";



// Define a type with the shape of the form values
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Define a schema for the form values
const formSchema: Schema<IFormInput> = object({
  firstName: string().max(15).required(),
  lastName: string().max(15).required(),
  email: string().email().required(),
  password: string().min(2).max(20).required(),
});

// Define a component that renders the form
export default function SignUp() {

  const router = useRouter();
  const methods = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
  });

  
  // Define a submit handler for the form
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const response = await axiosRequest("/api/user/create", "POST", data);
      console.log(response);

      if (response.status === 200) {
        router.push("verifyemail");
      }
      
    } catch (error) {
      alert('Email is already been used,please go to the login page.')
      console.log(error);
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <FormProvider {...methods}>
            <Box 
              component="form" 
              onSubmit={methods.handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
              >
                <FormTextField
                  name="firstName"
                  label="First Name"
                  id="firstName"
                  autoComplete="fistName"
                />

                <FormTextField
                  name="lastName"
                  label="Last Name"
                  id="lastName"
                  autoComplete="lastName"
                />

                <FormTextField
                  name="email"
                  label="Email Address"
                  id="email"
                  autoComplete="email"
                />

                <FormTextField
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  autoComplete="current-password"
                />
                
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              > 
                Sign UP
                <Link href="verifyemail"></Link>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    
  );
}
