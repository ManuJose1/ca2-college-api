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
  const [lecturer, setLecturer] = useState(null);
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/lecturers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setLecturer(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, token]);

  if (!lecturer) return <h3>This lecturer is no longer available</h3>;

  const removeLecturer = () => {
    console.log('deleted');
    setIsLoading(true); 
    let token = localStorage.getItem('token');

    axios.delete(`lecturers/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
         .then(response=>{
            console.log(response.data)
            navigate(`/lecturers`)
         })
         .catch(err=>{
            console.log(err.response.data)
         })
};


  return (
    <>
      <h1>Lecturer Information</h1>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {lecturer.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            E-mail: {lecturer.email}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Phone: {lecturer.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {lecturer.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/lecturers/${lecturer.id}/edit`}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button onClick={removeLecturer} startIcon={<DeleteRoundedIcon />}>
            {isLoading?"Deleting...":"Delete"}
        </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Show;
