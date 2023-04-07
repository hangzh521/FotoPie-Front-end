import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Post from "../PostList/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../Loader/NoMore";
import { getUserPosts } from "../../axiosRequest/api/user-post";
import ErrorAlert from "../LoginForm/ErrorAlert";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface GalleryPostsProps {
  profileUserId: string | string[] | undefined;
  handleOpen: (filename: string) => void;
}

interface ResponseImageData {
  _id: string;
  price: number;
  tag: string;
  userEmail: string;
  compressFilePath: string;
  filename: string;
}
// export interface PostListProps {
//   handleOpen: (filename: string) => void;
// }


const GalleryPost = ({ profileUserId, handleOpen }: GalleryPostsProps) => {
  const [galleryFilePath, setGalleryFilePath] = useState<ResponseImageData[]>([]);
  const [loaderHandler, setLoaderHandler] = useState(true);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  let limit = 10;


  const fetchImages = async () => {
    try {
      const res = await getUserPosts(profileUserId);
      if (res.status === 200) {
        setGalleryFilePath(res.data);
        if (res.data.length === 0) {
          setLoaderHandler(false);
        }
      }
      setHasFetched(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!profileUserId) return
    fetchImages();
  }, [profileUserId]);

  const noPostsMessage = (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="h4">
          You have not any posts yet
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <>
      {error && <ErrorAlert error={error}></ErrorAlert>}
      {galleryFilePath.length !== 0 ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 0,
            }
          }}
        >
          <Masonry columns={{ sm: 2, md: 3 }} spacing={2} sx={{ m: "auto" }}>
            {galleryFilePath.map((gallery) => (
              <Post
                url={gallery.compressFilePath}
                filename={gallery.filename}
                key={gallery._id}
                handleOpen={() => handleOpen(gallery.filename)}
              />
            ))}
          </Masonry>
        </Box>
      ) : (
        hasFetched && <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {noPostsMessage}
        </Box>
      )}
    </>

  );
};

export default GalleryPost;