import PostList from "./CollectionPosts";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import PhotoQuickView from "../PhotoQuickView/PhotoQuickView";

interface CollectionProps {
  profileUserId: string | string[] | undefined;
}
export default function Collection(props: CollectionProps) {
  let id = props.profileUserId;
  //console.log(id, 'debug')

  //define necessary states for quick-view modal
  const router = useRouter();
  const [selectedFilename, setSelectedFilename] = useState<
    string | undefined
  >();

  const [open, setOpen] = useState(false);
  //open modal popup window
  const handleOpen = (filename: string) => {
    setSelectedFilename(filename);
    setOpen(true);
  };
  //close modal popup window
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PostList id={id as string} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PhotoQuickView filename={selectedFilename} router={router} />
      </Modal>
    </>
  );
}
