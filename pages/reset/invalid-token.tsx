import InvalidToken from "../../src/components/Reset/InvalidToken";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";

const invalidToken: React.FC = () => {
  return (
    <>
      <NavBar isFixed={false} color="#000000" baseLine={NavBarStyles} />
      <InvalidToken />
    </>
  );
};

export default invalidToken;
