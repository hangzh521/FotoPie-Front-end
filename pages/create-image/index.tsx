import NewImage from "../../src/components/CreateImage/NewImage";
import NavBar from "../../src/components/NavBar/NavBar";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateImage() {
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
          <NewImage />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
