import { Button } from "@mui/material";

import { FC } from "react";

interface LoginButtonProps {
  loginStatus: "idle" | "loading" | "success" | "failed";
}

const LoginButton: FC<LoginButtonProps> = ({
  loginStatus,
}: LoginButtonProps) => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {loginStatus === "loading" ? "Loading..." : "Sign In"}
    </Button>
  );
};

export default LoginButton;
