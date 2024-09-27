import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import { login } from "../../store/authSlice";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";
import Account from "./Account";
import CSubmitButton from "../../customized/Buttons/CSubmitButton";
import { loginSchema } from "../../utils/validators/auth";
import { CTextField } from "../../customized/inputs/CTextField";
import { CBox } from "../../customized/layout/CBox";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <>
      <CBox>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textAlign: "center",
                }}
              >
                <CTextField name="email" label="Email address" />
                <CTextField
                  name="password"
                  label="password"
                  type={checked ? "text" : "password"}
                />
                <FormControlLabel
                  size="small"
                  control={
                    <Checkbox
                      id={"show-password"}
                      size="small"
                      checked={checked}
                      onChange={handleChange}
                    />
                  }
                  label="Show password"
                />
                <CSubmitButton loading={loading}>Login</CSubmitButton>
              </Box>
            </Form>
          )}
        </Formik>
        <Typography sx={{ textAlign: "end" }}>
          <Link to="/forget-password" style={{ textDecoration: "none" }}>
            Forgotten password?
          </Link>
        </Typography>
      </CBox>
      <Divider>or</Divider>
      <CBox>
        <Account
          text="Don't have an account?"
          link="/register"
          title="Register"
        />
        <GoogleAuth />
        <FacebookAuth />
      </CBox>
    </>
  );
}
