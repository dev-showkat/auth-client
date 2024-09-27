import { useDispatch, useSelector } from "react-redux";
import PrivateRouter from "./components/PrivateRouter";
import PublicRouter from "./components/PublicRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { setUser } from "./store/authSlice";

export default function RouterHandler() {
  const dispatch = useDispatch();
  const existingToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (existingToken && user) {
      dispatch(
        setUser({
          token: existingToken,
          user,
        })
      );
    } else {
      dispatch(
        setUser({
          token: null,
          user: null,
        })
      );
    }
  }, [dispatch]);

  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      {token || existingToken ? <PrivateRouter /> : <PublicRouter />}
    </Router>
  );
}
