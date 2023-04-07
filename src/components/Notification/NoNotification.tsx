import { Box, Button, Typography } from "@mui/material";
import Item from "./Notification.style";

const NoNotification = () => {
  return (
    //tips when no unread notifications
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Item
        sx={{
          width: "60%",
          mt: "5%",
          p: { xs: 3, md: 5 },
          bgcolor: "secondary.main",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "1.2rem", md: "2rem" }, fontWeight: 700 }}
        >
          No new notifications found
        </Typography>
        <Typography
          component={"p"}
          sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, m: 1.5 }}
        >
          Please check back later
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "2%", fontSize: { xs: "0.5rem", md: "1rem" } }}
          href={"/upload"}
        >
          Upload Photos
        </Button>
      </Item>
    </Box>
  );
};

export default NoNotification;
