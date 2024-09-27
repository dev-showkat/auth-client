import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";

export default function ShowLoader() {
  const { loading } = useSelector((state) => state.loader);

  return <>{loading && <LinearProgress />}</>;
}
