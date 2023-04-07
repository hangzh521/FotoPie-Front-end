import React, { SetStateAction, Dispatch } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { upload } from "../../axiosRequest/api/editUser";


interface Props {
  setAvatar: Dispatch<SetStateAction<string>>;
}

interface MouseEvent {
  target: EventTarget;
}
const AvatarUploadButton: React.FC<Props> = ({ setAvatar }) => {
  const handleFileUpload = async (event: MouseEvent) => {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files != null) {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await upload(formData);
        if (response.status === 200) {
          setAvatar(response.data.avatarPath);
        }
      } catch (error) {
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error occurred, unknown origin — <strong>check it out!</strong>
        </Alert>;
        console.error(error);
      }
    }
  };

  return (
    <Button
      size="medium"
      variant="contained"
      color="secondary"
      sx={{ mt: '15%', mb: '2%' }}
      component="label"
    >
      Change Image
      <input hidden type="file" accept="image/*" onChange={handleFileUpload} />
    </Button>
  );
};

export default AvatarUploadButton;

