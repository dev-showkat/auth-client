import { useDispatch, useSelector } from "react-redux";
import { Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import { Formik, Form } from "formik";
import { emailVerification, resetPassword } from "../../store/authSlice";
import CSubmitButton from "../../customized/Buttons/CSubmitButton";
import { resetPasswordSchema } from "../../utils/validators/auth";
import { CTextField } from "../../customized/inputs/CTextField";
import { CBox } from "../../customized/layout/CBox";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { showToast } from "../../store/toastSlice";
import { useEffect, useState } from "react";

export default function EmailVerification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [checked, setChecked] = useState(false);
  const { loading, resetPasswordSuccess, verificationEmail } = useSelector(
    (state) => state.auth
  );
  const verificationCode = searchParams.get("code");
  const email = searchParams.get("email");

  const initialValues = {
    email: verificationEmail || email,
    verificationCode: verificationCode || "",
    password: "",
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(
        showToast({
          message: "Password reset",
        })
      );
      navigate(`/`);
    }
  }, [resetPasswordSuccess]);

  const handleSubmit = (values) => {
    dispatch(resetPassword(values));
  };

  return (
    <CBox>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography sx={{ fontSize: 16, fontWeight: "bolder" }}>
            Verify Your Account
          </Typography>
          <Typography>
            Please enter your email and verification code send on Email.
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Grid container spacing={2}>
                <CTextField name="email" label="Email address" />
                <CTextField name="verificationCode" label="Verification Code" />
                <CTextField
                  name="password"
                  label="New Password"
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
                <Grid size={12} container spacing={2} justifyContent={"end"}>
                  <Grid size={3}>
                    <Button component={Link} to="/">
                      Cancel
                    </Button>
                  </Grid>
                  <Grid size={3}>
                    <CSubmitButton loading={loading}>Verify</CSubmitButton>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </CBox>
  );
}
