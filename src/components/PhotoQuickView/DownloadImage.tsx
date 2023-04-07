import type { NextPage } from "next";
import { NextRouter } from "next/router";
import { getDownloadImage } from "../../axiosRequest/api/photoQuickView";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, IconButton } from "@mui/material";

export interface DownloadImageProps {
  filenameString: string | string[] | undefined;
  router: NextRouter;
  isAuthenticated: boolean;
}

const DownloadButton: NextPage<DownloadImageProps> = ({
  filenameString,
  router,
  isAuthenticated,
}) => {
  const downLoadImages = async () => {
    if (!isAuthenticated) router.push("/login");
    if (isAuthenticated) {
      try {
        //get presigned url
        const response = await getDownloadImage(filenameString);
        const presignedUrl = response.data.url;

        //use proxy url to download image
        const proxyUrl = `/api/download-image?presignedUrl=${encodeURIComponent(
          presignedUrl
        )}`;
        const res = await fetch(proxyUrl);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${filenameString}`;
        link.click();
        URL.revokeObjectURL(url);
      } catch (error: any) {
        if (error?.response?.status === 403 || 404) {
          router.push("/subscription");
        }
        console.error("unexpected error: " + error);
      }
    }
  };
  return (
    <>
      {/* show download button on desktop */}
      <Button
        variant="contained"
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          bgcolor: "primary.main",
          textTransform: "none",
          fontSize: "1.2rem",
        }}
        startIcon={<DownloadIcon />}
        onClick={downLoadImages}
      >
        Download
      </Button>

      {/* show download button on mobile */}
      <IconButton
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          color: "primary.main",
        }}
        onClick={downLoadImages}
      >
        {<DownloadIcon />}
      </IconButton>
    </>
  );
};
export default DownloadButton;
