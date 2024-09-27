import axiosInstance from ".";

export const registerService = async (payload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);
  return data;
};

export const emailVerificationService = async (payload) => {
  const { data } = await axiosInstance.post(
    "/auth/email-verification",
    payload
  );
  return data;
};

export const loginService = async (payload) => {
  const { data } = await axiosInstance.post("/auth/login", payload);
  return data;
};

export const logoutService = async (payload) => {
  const { data } = await axiosInstance.post("/auth/logout", payload);
  return data;
};

export const forgetPasswordService = async (payload) => {
  const { data } = await axiosInstance.post("/auth/forget-password", payload);
  return data;
};

export const resetPasswordService = async (payload) => {
  const { data } = await axiosInstance.post("/auth/reset-password", payload);
  return data;
};
