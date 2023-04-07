import { Typography } from "@mui/material";

interface CategoryHeaderProps {
  tagString: string | string[] | undefined;
}

export default function CategoryHeader({ tagString }: CategoryHeaderProps) {
  return (
    <Typography
      variant="h3"
      sx={{
        ml: 5,
        mt: 5,
        fontWeight: 500,
      }}
    >
      Category: '{tagString} image'
    </Typography>
  );
}
