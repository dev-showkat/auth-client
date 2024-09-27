import { Button } from "@mui/material";

export default function CButton({
  variant = "contained",
  color = "primary",
  children,
  onClick,
}) {
  return (
    <Button onClick={onClick} size="small" variant={variant} color={color}>
      {children}
    </Button>
  );
}
