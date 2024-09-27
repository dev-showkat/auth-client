import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import { Container } from "@mui/material";
import ResetPassword from "../pages/authentication/ResetPassword";
import EmailVerification from "../pages/authentication/EmailVerification";

const PublicRouter = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default PublicRouter;
