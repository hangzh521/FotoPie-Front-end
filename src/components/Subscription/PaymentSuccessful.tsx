import React from "react";
import styles from "./Subscription.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const PaymentSuccessful: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
        rel="stylesheet"
      />
      <div className={styles.successContainer}>
        <div className={styles.card}>
          <div
            style={{
              borderRadius: 200,
              height: 200,
              width: 200,
              background: "#F8FAF5",
              margin: "0 auto",
            }}
          >
            <i className={styles.checkmark}>✓</i>
          </div>
          <h1 className={styles.header}>Success</h1>
          <p className={styles.text}>
            Thank you for your subscription
            <br />
            Enjoy your journey to splendid photos
          </p>
          <br />
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Back to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
