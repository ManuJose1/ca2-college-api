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

const CourseCard = ({ course, authenticated, deleteCallback }) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {course.title} {course.code}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {course.description.substring(0, 120)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/courses/${course.id}`}>
            Learn More
          </Button>
          <Button
            component={Link}
            to={`/courses/${course.id}/edit`}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <DeleteBtn resource='courses' id={course.id} deleteCallback={course.id}/>
        </CardActions>
      </Card>
    </>
  );
};

export default CourseCard;
