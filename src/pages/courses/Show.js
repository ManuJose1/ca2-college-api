import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useParams, Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import { useEffect, useState } from "react";
import axios from "../../config/api";
import EnrolmentCard from "../../components/EnrolmentCard";

const Show = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCourse(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, token]);

  if (!course) return <h3>This course is no longer available</h3>;

  const enrolmentList = course.enrolments.map((enrolment)=>{
    return(
      <EnrolmentCard
      key={enrolment.id}
      />
    )
  })

  return (
    <>
      <h1>Course Information</h1>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {course.title} {course.code}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Points: {course.points}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Level: {course.level}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
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
          <DeleteBtn />
        </CardActions>
      </Card>
      <h1>Enrolments</h1>
      {/* {enrolmentList} */}

    </>
  );
};

export default Show;
