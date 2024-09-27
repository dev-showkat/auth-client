import { Button } from "@mui/material";
import { FacebookIcon } from "../CustomIcons";

export default function FacebookAuth() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      onClick={() => alert("Sign in with Facebook")}
      startIcon={<FacebookIcon />}
    >
      Sign in with Facebook
    </Button>
  );
}
