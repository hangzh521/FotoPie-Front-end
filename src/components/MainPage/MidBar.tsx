import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import styles from "./MainPage.module.css";
import Grid from "@mui/material/Grid";

export default function MidBar() {
  return (
    <Grid container sx={{ width: "380px" }}>
      {/* Home button */}
      <Grid item xs={3} sm={3} md={3}>
        <Button
          variant="outlined"
          sx={{
            fontSize: "15px",
            borderRadius: 10,
            p: 1.7,
            pl: 2.5,
            pr: 2.5,
            ":hover": { bgcolor: "#8777D9", border: "none" },
            textTransform: "none",
            backgroundColor: "#8777D9",
            border: "none",
          }}
          size="large"
        >
          <Link href="/" underline="none" sx={{ color: "white" }}>
            Home
          </Link>
        </Button>
      </Grid>

      <Grid item xs={3} sm={3} md={3}>
        {/* Explore button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "15px",
            borderRadius: 10,
            p: 1.7,
            pl: 2.5,
            pr: 2.5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link
            href="/category/category-main-page"
            underline="none"
            sx={{ color: "black" }}
          >
            Explore
          </Link>
        </Button>
      </Grid>

      <Grid item xs={3} sm={3} md={3}>
        {/* AI Creating button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "15px",
            borderRadius: 10,
            p: 1.7,
            pl: 2.5,
            pr: 2.5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link href="/create-image" underline="none">
            <span className={styles.gradientText}>AIDrawing</span>
          </Link>
        </Button>
      </Grid>

      <Grid item xs={3} sm={3} md={3}>
        {/* AI Simulating button */}
        <Button
          variant="outlined"
          sx={{
            fontSize: "15px",
            borderRadius: 10,
            p: 1.7,
            pl: 2.5,
            pr: 2.5,
            ":hover": { bgcolor: "#EAE6FF", border: "none" },
            textTransform: "none",
            border: "none",
          }}
          size="large"
        >
          <Link href="/create-variation" underline="none">
            <span className={styles.gradientText}>AICreating</span>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
