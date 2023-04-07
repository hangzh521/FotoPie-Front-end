import Image from "mui-image";

export interface PostImageProps {
  postPhoto: string;
}

const PostImage = ({ postPhoto }: PostImageProps) => {
  return (
    <>
      <Image alt="image" src={postPhoto} fit="contain" duration={0.5} />
    </>
  );
};

export default PostImage;
