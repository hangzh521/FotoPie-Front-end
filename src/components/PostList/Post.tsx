import styles from "./post.module.css";

export interface PostProps {
  url: string;
  filename: string;
  handleOpen: (filename: string) => void;
}

const Post = ({ url, filename, handleOpen }: PostProps) => {
  return (
    <div onClick={() => handleOpen(filename)}>
      <div className={styles.container}>
        <img
          src={url}
          alt=""
          loading="lazy"
          width={"100%"}
          className={styles.image}
        />
        <div className={styles.background}></div>
      </div>
    </div>
  );
};

export default Post;
