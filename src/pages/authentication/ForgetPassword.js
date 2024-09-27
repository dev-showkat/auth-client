import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { forgetPassword } from "../../store/authSlice";
import CSubmitButton from "../../customized/Buttons/CSubmitButton";
import { forgetPasswordSchema } from "../../utils/validators/auth";
import { CTextField } from "../../customized/inputs/CTextField";
import { CBox } from "../../customized/layout/CBox";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../../store/toastSlice";
import { useEffect } from "react";

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, verificationEmail } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
  };

  useEffect(() => {
    if (verificationEmail) {
      dispatch(
        showToast({
          message: "Please check your email for verification",
        })
      );
      navigate(`/reset-password`);
    }
  }, [verificationEmail]);

  const handleSubmit = (values) => {
    dispatch(forgetPassword(values));
  };

  return (
    <CBox>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography sx={{ fontSize: 16, fontWeight: "bolder" }}>
            Find Your Account
          </Typography>
          <Typography>
            Please enter your email address to search for your account.
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={forgetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Grid container spacing={2}>
                <CTextField name="email" label="Email address" />
                <Grid size={12} container spacing={2} justifyContent={"end"}>
                  <Grid size={3}>
                    <Button component={Link} to="/">
                      Cancel
                    </Button>
                  </Grid>
                  <Grid size={3}>
                    <CSubmitButton loading={loading}>Search</CSubmitButton>
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
