import NoticeStack from "../src/components/Notification/NoticeStack";
import Navbar from "../src/components/NavBar/NavBar";
import { NavBarStyles } from "../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";
import Copyright from "../src/components/Copyright";

export default function notification() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <div>
            <Navbar isFixed={false} color="#000000" baseLine={NavBarStyles} />
            <NoticeStack />
          </div>
        </motion.div>
      </AnimatePresence>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
