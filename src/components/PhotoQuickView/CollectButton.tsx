import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import axiosRequest from "../../utils/axiosRequest";
import { useRouter } from "next/router";
import { getCollectNumber } from "../../axiosRequest/api/photoQuickView";

export interface CollectButtonProps {
  filenameString: string;
  // filename: string | string[] | undefined;
  collected: boolean;
  userCollects: number;
  setCollected: Dispatch<SetStateAction<boolean>>;
  setUserCollects: Dispatch<SetStateAction<number>>;
}

//Toggle collect button and add/delete collect number
const CollectButton = (props: CollectButtonProps) => {
  // const [collected, setCollected] = useState(false);
  // const [userCollects, setUserCollects] = useState(0);
  // const [collected, setCollected] = useState(props.collected);
  // const [userCollects, setUserCollects] = useState(props.userCollects);
  const router = useRouter();
  const addToCollection = async () => {
    try {
      // const response = await axiosRequest(
      //   `/api/collect/${props.filename}`,
      //   "POST",
      //   {
      //     filename: `${props.filename}`,
      //   }
      // );
      const response = await getCollectNumber(props.filenameString);
      // const response = await getCollectNumber(props.filename);
      const data = response.data;
      props.setUserCollects(data);
      props.setCollected((collected) => !collected);
    } catch (error: any) {
      // router.push("/login");
      console.log(error);
      console.log(error.message);
    }
  };
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          opacity: { xs: 0, sm: 0, md: 1 },
          color: props.collected ? "orange" : "primary.main",
        }}
        onClick={addToCollection}
        startIcon={<AddToPhotosIcon />}
      >
        {props.collected
          ? "Collected" + " " + `${props.userCollects}`
          : "Collect" + " " + `${props.userCollects}`}
      </Button>
    </>
  );
};

export default CollectButton;
