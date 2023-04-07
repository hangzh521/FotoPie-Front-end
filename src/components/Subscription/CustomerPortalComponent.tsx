import CustomerPortalButton from "./CustomerPortalButton";
import styles from "./Subscription.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Link from "@mui/material/Link";

export default function CustomerPortalComponent() {
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
            Manage your <span className={styles.gradientText}>FotoPie+</span>{" "}
            membership in an easy way and explore the exclusive AI image
            creating function.
          </h1>

          <CustomerPortalButton />

          <Box sx={{ lineHeight: 2.5 }}>
            <ul>
              <li>
                <strong>Unlimited royalty-free downloads. Try it?</strong>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#8777D9",
                  }}
                >
                  <Link href="/" sx={{ color: "white" }} underline="none">
                    Go to Photowall
                  </Link>
                </Button>
              </li>
              <li>
                <strong>Exclusive AI image creating. Try it?</strong>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#8777D9",
                  }}
                >
                  <Link
                    href="/create-image"
                    sx={{ color: "white" }}
                    underline="none"
                  >
                    AI image creation
                  </Link>
                </Button>
              </li>
              <li>
                <strong>
                  Using AI to generate similar photos of yours. Try it?
                </strong>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#8777D9",
                  }}
                >
                  <Link
                    href="/create-variation"
                    sx={{ color: "white" }}
                    underline="none"
                  >
                    Similar image generation
                  </Link>
                </Button>
              </li>
            </ul>
          </Box>
        </Box>

        <img src="/subscription-image.jpg" alt="" />
      </Box>
    </Box>
  );
}
