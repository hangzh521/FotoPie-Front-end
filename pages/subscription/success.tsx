import Copyright from "../../src/components/Copyright";
import SuccessDisplay from "../../src/components/Subscription/CustomerPortalButton";
import PaymentSuccessful from "../../src/components/Subscription/PaymentSuccessful";
import { NavBarStyles } from "../../src/components/NavBar/NavbarBaseline.style";
import NavBar from "../../src/components/NavBar/NavBar";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscriptionPage() {
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
          <PaymentSuccessful />
          <br />
        </motion.div>
      </AnimatePresence>
      <Copyright />
    </>
  );
}
