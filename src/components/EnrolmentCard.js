import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

const EnrolmentCard = ({ enrolment, authenticated, deleteCallback }) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {enrolment.lecturer.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {enrolment.date}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {enrolment.status}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button component={Link} to={`/courses/${enrolment.id}`}>
            Learn More
          </Button>
          <Button
            component={Link}
            to={`/courses/${enrolment.id}/edit`}
            startIcon={<EditIcon />}
          > 
            Edit
          </Button>
          <DeleteBtn />
        </CardActions> */}
      </Card>
    </>
  );
};

export default EnrolmentCard;
