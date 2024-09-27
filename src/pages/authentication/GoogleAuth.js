import { Button } from "@mui/material";
import { GoogleIcon } from "../CustomIcons";

export default function GoogleAuth() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      onClick={() => alert("Sign in with Google")}
      startIcon={<GoogleIcon />}
    >
      Sign in with Google
    </Button>
  );
}
