import UserNotExist from "../../src/components/Reset/UserNotExist";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const userNotExist: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <UserNotExist />
    </>
  );
};

export default userNotExist;
