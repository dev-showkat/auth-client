import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../store/toastSlice";

export default function ShowToast() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={6000}
      onClose={() => dispatch(hideToast())}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => dispatch(hideToast())}
        severity={toast.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
}
