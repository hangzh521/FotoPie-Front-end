import Avatar from "@mui/material/Avatar";

interface Props {
  avatar: string;
}

const ProfilePicture: React.FC<Props> = ({ avatar }) => {
  return <Avatar src={avatar} sx={{ width: 130, height: 130 }}></Avatar>;
};

export default ProfilePicture;
