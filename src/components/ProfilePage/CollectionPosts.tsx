import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Post from "../PostList/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../Loader/NoMore";
import { profileCollection } from "../../axiosRequest/api/userCollection";
import ErrorAlert from "../LoginForm/ErrorAlert";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface CollectionPostsProps {
  id: string;
  handleOpen: (filename: string) => void;
}

interface ResponseImageData {
  collect_user_email: string;
  collected_user_email: string;
  compressed_imageUrl: string;
  _id: string;
  filename: string;
}

// export interface PostListProps {
//   handleOpen: (filename: string) => void;
// }


const PostList = ({id, handleOpen}: CollectionPostsProps) => {
  const [collection, setCollection] = useState<ResponseImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);

  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  let limit = 10;

  
  const fetchImages = async () => {
    try {
      const res = await profileCollection(id, page, limit);
      if (res.status === 200) {
        setCollection([...collection, ...res.data]);
        setPage(page + 1);
        if ([...res.data].length === 0) {
          setLoaderHandler(false);
        }
      }
      setHasFetched(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!id) return
    fetchImages();
  }, [id]);

  return (
    <>
      {/*<h2>{props.id}</h2>*/}
      {error && <ErrorAlert error={error}></ErrorAlert>}
      {[...collection].length === 0 ? hasFetched && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            You have not collected any posts yet
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <InfiniteScroll
            dataLength={collection.length}
            next={fetchImages}
            hasMore={true}
            loader={loaderHandler ? <Loader /> : <NoMore />}
          >
            <Masonry columns={{ sm: 2, md: 3 }} spacing={2} sx={{ m: "auto" }}>
              {collection.map((collection) => (
                <Post
                  url={collection.compressed_imageUrl}
                  filename={collection.filename}
                  key={collection._id}
                  handleOpen={() => handleOpen(collection.filename)}
                />
              ))}
            </Masonry>
          </InfiniteScroll>
        </Box>
      )}
    </>
  );
};

export default PostList;