import { useEffect, useState } from "react";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import NoMore from "../Loader/NoMore";
import { getPhotoWall } from "../../axiosRequest/api/photowall";

interface ImageData {
  _id: string;
  filename: string;
  compressFilePath: string;
}

export interface PostListProps {
  handleOpen: (filename: string) => void;
}

const PostList = ({ handleOpen }: PostListProps) => {
  const [posts, setPost] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loaderHandler, setLoaderHandler] = useState(true);

  const [Error, setError] = useState(null);

  let limit = 10;

  const fetchImages = async () => {
    try {
      const res = await getPhotoWall(page, limit);
      if (res.status === 200) {
        setPost([...posts, ...res.data]);
        setPage(page + 1);
        if ([...res.data].length === 0) {
          setLoaderHandler(false);
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <p>{Error}</p>
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
          dataLength={posts.length}
          next={fetchImages}
          hasMore={true}
          loader={loaderHandler ? <Loader /> : <NoMore />}
        >
          <Masonry columns={{ sm: 2, md: 3 }} spacing={2} sx={{ m: "auto" }}>
            {posts.map((post) => (
              <Post
                url={post.compressFilePath}
                filename={post.filename}
                key={post._id}
                handleOpen={() => handleOpen(post.filename)}
              />
            ))}
          </Masonry>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PostList;
