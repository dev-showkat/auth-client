import { Button } from "@mui/material";

export default function CSubmitButton({ disabled, children }) {
  return (
    <Button
      size="small"
      fullWidth
      type="submit"
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
}
