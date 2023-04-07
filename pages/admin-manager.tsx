import Stack from "@mui/material/Stack";
import Header from "../src/components/AdminManage/Header";
import Main from "../src/components/AdminManage/Main";
import Copyright from "../src/components/Copyright";
import { useCheckToken } from "../src/hooks/useCheckToken";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

// Define a component that renders the page
export default function AdminManager() {
  useCheckToken();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <Stack>
            <Header />
            {isAuthenticated ? <Main /> : ""}
          </Stack>
        </motion.div>
      </AnimatePresence>
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </>
  );
}
