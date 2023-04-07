import EmailSent from "../../src/components/Reset/EmailSent";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import Copyright from "../../src/components/Copyright";

const emailSent: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <EmailSent />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default emailSent;
