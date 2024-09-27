import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider, FormControlLabel, Checkbox } from "@mui/material";
import { Formik, Form } from "formik";
import { register } from "../../store/authSlice";
import Account from "./Account";
import SubmitButton from "../../customized/Buttons/CSubmitButton";
import { signUpSchema } from "../../utils/validators/auth";
import { CTextField } from "../../customized/inputs/CTextField";
import { CBox } from "../../customized/layout/CBox";
import { useState } from "react";
import { showToast } from "../../store/toastSlice";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const { loading, verificationEmail } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  if (verificationEmail) {
    dispatch(
      showToast({
        message: "Please check your email for verification",
      })
    );
    navigate("/email-verification");
  }

  return (
    <>
      <CBox>
        <Typography variant="h4" gutterBottom>
          Registration
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <CBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textAlign: "center",
                }}
              >
                <CTextField name="username" label="Username" />
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
                <SubmitButton loading={loading}>Register</SubmitButton>
              </CBox>
            </Form>
          )}
        </Formik>
      </CBox>
      <Divider>or</Divider>
      <CBox
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Account text="Already have an account?" link="/" title="Login" />
      </CBox>
    </>
  );
}
