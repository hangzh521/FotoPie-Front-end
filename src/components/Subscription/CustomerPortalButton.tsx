import { Button } from "@mui/material";
import { createPortalSession } from "../../axiosRequest/api/subscription";

const clickToPortal = async () => {
  try {
    // Send POST request to api/subscription/create-portal-session
    const response = await createPortalSession();

    const portalSession_url = response.data.portalSession_url;

    // Jump to customer portal page
    window.location.href = portalSession_url;
  } catch (error) {
    return "Create checkout session failed";
  }
};

export default function CustomerPortalButton() {
  return (
    <Button type="submit" variant="contained" onClick={clickToPortal}>
      Manage Your Subscription
    </Button>
  );
}
