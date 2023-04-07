import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Copyright from "../src/components/Copyright";
import NavBar from "../src/components/NavBar/NavBar";
import { getMe } from "../src/axiosRequest/api/editUser";
import EditUserProfileHeader from "../src/components/EditUserProfile/EditUserProfileHeader";
import AvatarUploadButton from "../src/components/EditUserProfile/AvatarUploadButton";
import ProfilePicture from "../src/components/EditUserProfile/ProfilePicture";
import EditUserForm from "../src/components/EditUserProfile/EditUserForm";
import { NavBarStyles } from "../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";

// Define a component that renders the form
export default function EditUserProfile() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [avatar, setAvatar] = useState("");
  const array = [1, 2, 3, 4];

  useEffect(() => {
    getMe().then((res) => {
      setLastName(res.data.lastName);
      setFirstName(res.data.firstName);
      setAvatar(res.data.avatarPath);
    });
  }, [avatar]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
          <Container component="main" maxWidth="md">
            {/*Page heading, profile icon and change picture button*/}
            <EditUserProfileHeader />
            {/*change avatar button*/}
            <Container maxWidth="md">
              <Grid container spacing={20}>
                <Grid item md={2}>
                  {avatar ? <ProfilePicture avatar={avatar} /> : null}
                </Grid>
                <Grid item md={5}>
                  <AvatarUploadButton setAvatar={setAvatar} />
                </Grid>
              </Grid>
            </Container>

            <EditUserForm firstName={firstName} lastName={lastName} />
          </Container>
        </motion.div>
      </AnimatePresence>
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}
