import Container from "@mui/material/Container";
import { Avatar, Grid } from "@mui/material";
const CommentList = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ marginTop: 5, marginBottom: 5 }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Avatar
            alt="my avatar"
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            sx={{ width: 56, height: 56, margin: "auto" }}
          />
        </Grid>
        <Grid item>
          <span>Jeremy</span>
          <span> 15 mins ago</span>
          <div>Awesome shots!!!</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommentList;
