import { Typography } from "@mui/material";

interface SearchHeaderProps {
  tagString: string | string[] | undefined;
}

export default function SearchHeader({ tagString }: SearchHeaderProps) {
  return (
    <Typography
      variant="h3"
      sx={{
        ml: 5,
        mt: 5,
        fontWeight: 500,
      }}
    >
      Search: '{tagString} image'
    </Typography>
  );
}
