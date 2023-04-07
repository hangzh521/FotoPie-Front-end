import { Avatar, Button, TextField, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { object, Schema, string } from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ICommentInput {
  content: string;
}
const formSchema: Schema<ICommentInput> = object({
  content: string().required(),
});

const PostComment = () => {
  const methods = useForm<ICommentInput>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormProvider {...methods}>
      <Container component="main" maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Avatar
              alt="my avatar"
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              sx={{ width: 56, height: 56, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              multiline
              placeholder="Add your comment"
              fullWidth
              sx={{ padding: 0 }}
            />
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" size="large" sx={{ margin: "auto" }}>
              SEND
            </Button>
          </Grid>
        </Grid>
      </Container>
    </FormProvider>
  );
};

export default PostComment;
