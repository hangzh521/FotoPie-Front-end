import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "../../utils/Link";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import AvatarMenu from "./AvatarMenu";

interface userIconsProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  notificationCount: number;
  avatarPath: string;
  handleNotificationClick: () => void;
  color?: string;
  fix: boolean;
}

export default function UserIcons({
  notificationCount,
  avatarPath,
  handleProfileMenuOpen,
  handleNotificationClick,
  color = "white",
  fix,
}: userIconsProps) {
  const gradientText = {
    backgroundImage: "linear-gradient(45deg, red, orange, green, blue, indigo)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        width: "350px",
        position: "sticky",
      }}
    >
      {/* FotoPie+ */}
      <Typography>
        <Link
          variant="h6"
          underline="none"
          style={gradientText}
          href="/subscription"
          sx={{
            fontSize: 22,
            "&:hover": {
              opacity: 0.9,
              cursor: "pointer",
            },
          }}
        >
          {"FotoPie+"}
        </Link>
      </Typography>

      {/* notifications */}
      <IconButton
        size="large"
        color="inherit"
        onClick={handleNotificationClick}
        sx={{ height: 50, width: 50 }}
      >
        <Badge badgeContent={notificationCount} color="error">
          <NotificationsIcon
            sx={{
              fontSize: "2rem",
              color: fix ? "black" : color,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Badge>
      </IconButton>

      {/* User Profile */}
      <Avatar
        alt="Avatar"
        src={avatarPath}
        onClick={handleProfileMenuOpen}
        sx={{
          width: 50,
          height: 50,
          "&:hover": {
            opacity: 0.8,
            cursor: "pointer",
          },
        }}
      />

      <Link href="/upload" underline="none">
        <Button
          variant="contained"
          sx={{
            p: 1.5,
            pr: 2,
            pl: 2,
          }}
        >
          Upload
        </Button>
      </Link>
      
    </Box>
  );
}
