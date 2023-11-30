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
  
  const LecturerCard = ({ lecturer, authenticated, deleteCallback }) => {
    return (
      <>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {lecturer.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {lecturer.email}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {lecturer.phone}
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
  
  export default LecturerCard;