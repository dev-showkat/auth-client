import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4">Welcome, {user?.username}!</Typography>
      <Button
        onClick={() => dispatch(logout({ email: user?.email }))}
        variant="contained"
        color="secondary"
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
