import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Account({ text, link, title }) {
  return (
    <Typography>
      {text}
      <Link to={link} style={{ textDecoration: "none", marginInline: 2 }}>
        {title}
      </Link>
    </Typography>
  );
}
