import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";

export default function EditAccountButton({ id }) {
  return (
    <Link to={`/profile/edit/${id}`}>
      <Button data-cy="backButton" className="delawareButton profileButton">
        <Typography variant="subtitle1" component="div">
          Edit account
        </Typography>
        <CreateIcon className="icon" />
      </Button>
    </Link>
  );
}
