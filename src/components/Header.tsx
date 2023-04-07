import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SearchBar from "./Search/SearchBar";
import Link from "@mui/material/Link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Header() {
  return (
    <Stack
      component="div"
      sx={{
        flexGrow: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          mt: 14,
          ml: "auto",
          mr: "auto",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          align="center"
          display="inline"
          color="#FFFFFF"
          sx={{ fontSize: 26, fontFamily: "inherit", textAlign: "left" }}
        >
          Discover moments.
          <br />
          Find inspiration.
        </Typography>

        <Paper
          sx={{
            p: "2px 4px",
            width: "100%",
            mt: 2,
            "@media (min-width: 600px)": {
              width: 600,
            },
          }}
        >
          <SearchBar sx={{ width: "100%" }} />
        </Paper>

        <Typography
          variant="subtitle2"
          align="center"
          display="inline"
          color="#FFFFFF"
          sx={{
            fontSize: 14,
            fontFamily: "inherit",
            textAlign: "left",
            mt: 1,
            mb: 15,
            lineHeight: 1.5,
            "& a": { textDecoration: "none", mx: 0.5 },
          }}
        >
          <span style={{ fontSize: 18, opacity: 0.7 }}>Trending:</span>
          <Box component="span" sx={{ ml: 0.5 }}>
            <Link href="/category/food" color="inherit">
              Food,
            </Link>
            <Link href="/category/cars" color="inherit">
              Cars,
            </Link>
            <Link href="/category/building" color="inherit">
              Building,
            </Link>
            <Link href="/category/city" color="inherit">
              City,
            </Link>
            <Link href="/category/nature" color="inherit">
              Nature,
            </Link>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "flex-end",
            }}
          >
            <Link href="/category/category-main-page" color="inherit">
              <Typography variant="h6">
                {"..."}
              </Typography>
            </Link>
          </Box>
        </Typography>
      </Box>
    </Stack>
  );
}
