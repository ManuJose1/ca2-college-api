import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useParams, Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import { useEffect, useState } from "react";
import axios from "../../config/api";
import EnrolmentCard from "../../components/EnrolmentCard";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';import { useNavigate } from 'react-router-dom';

const Show = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState('');
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

  const removeCourse = () => {
    console.log('deleted');
    setIsLoading(true); 
    let token = localStorage.getItem('token');

    axios.delete(`courses/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
         .then(response=>{
            console.log(response.data)
            navigate(`/courses`)
         })
         .catch(err=>{
            console.log(err.response.data)
         })
};

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
          <Button
            component={Link}
            to={`/courses/${course.id}/edit`}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button onClick={removeCourse} startIcon={<DeleteRoundedIcon />}>
            {isLoading?"Deleting...":"Delete"}
        </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Show;
