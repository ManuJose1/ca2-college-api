import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

const CourseCard = ({ course, authenticated, deleteCallback }) => {
  return (
    <Card sx={{ maxWidth: 350, m: 1 }} style={{ backgroundColor: "#b7d5d4" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description.substring(0, 120)}...
        </Typography>
      </CardContent>

      {authenticated ? (
        <CardActions>
          <Button size="small" sx={{ px: 1.5 }}>
            <Link underline="hover" to={`/courses/${course.id}`}>
              Learn More
            </Link>
          </Button>
          <Button size="small" startIcon={<EditIcon />}>
            <Link underline="hover" to={`/courses/${course.id}/edit`}>Edit</Link>
          </Button>
          <DeleteBtn
            size="small"
            startIcon={<DeleteIcon />}
            deleteCallback={deleteCallback}
            id={course.id}
            resource="courses"
          >
            Delete
          </DeleteBtn>
        </CardActions>
      ) : (
        <CardActions>
          <Button size="small" sx={{ px: 1.5 }}>
            <Link underline="hover" to={`/courses/${course.id}`}>
              Learn More
            </Link>
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CourseCard;
