import ResetRequest from "../../src/components/Reset/ResetRequest";
import Copyright from "../../src/components/Copyright";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";

const resetRequest: React.FC = () => {
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
          <ResetRequest />
        </motion.div>
      </AnimatePresence>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
};

export default resetRequest;
