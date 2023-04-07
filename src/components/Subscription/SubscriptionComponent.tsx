import styles from "./Subscription.module.css";
import SubscriptionButton from "./SubscriptionButton";
import Box from "@mui/material/Box";

export default function SubscriptionComponent() {
  return (
    <Box>
      <Box
        className={styles.imageSection}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          marginTop: "30px",
          marginBottom: "60px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Box
          sx={{
            p: "40px",
          }}
        >
          <h1>
            Upgrade to <span className={styles.gradientText}>FotoPie+</span> and
            start creating with exclusive, royalty-free images.
          </h1>

          <Box sx={{ lineHeight: 2.5 }}>
            <ul>
              <li>
                <strong>Unlimited royalty-free downloads</strong>
              </li>
              <li>
                <strong>Exclusive AI image creating</strong>
              </li>
              <li>
                <strong>Using AI to generate similar photos of yours</strong>
              </li>
            </ul>
          </Box>
          <br />
          <SubscriptionButton />
        </Box>

        <img src="/subscription-image.jpg" alt="" />
      </Box>
    </Box>
  );
}
