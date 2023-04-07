import Link from "../../utils/Link";
import { Avatar, Typography, Grid } from "@mui/material";

export interface UserNameProps {
  userID: string;
  userName: string;
  userAvatar: string;
}

const UserName = ({ userID, userName, userAvatar }: UserNameProps) => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ pl: 1 }}
    >
      <Grid item>
        <Link href={`/profile/${userID}`}>
          <Avatar
            alt={`${userID}`}
            src={userAvatar}
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
              ":hover": {
                opacity: 0.8,
              },
            }}
          ></Avatar>
        </Link>
      </Grid>
      <Grid item>
        <Link href={`/profile/${userID}`} sx={{ textDecoration: "none" }}>
          {
            <Typography
              variant="h2"
              fontSize={{
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              }}
              color={"primary"}
              fontWeight={700}
              sx={{
                ":hover": { color: "primary.light" },
              }}
            >
              {userName}
            </Typography>
          }
        </Link>
      </Grid>
    </Grid>
  );
};

export default UserName;
