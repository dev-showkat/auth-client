import { Box } from "@mui/material";

export const CBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
};
