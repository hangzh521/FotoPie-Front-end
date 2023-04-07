import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function EditUserProfileHeader() {
  return (
    <>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography component="h1" variant="h3">
          Profile Setting
        </Typography>
      </Box>
    </>
  );
}

export default EditUserProfileHeader;
