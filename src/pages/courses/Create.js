import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Slider, Typography } from "@mui/material";

const Create = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    code: "",
    description: "",
    points: "",
    level: "",
  });

  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isRequired = (fields) => {
    let included = true;
    setErrors({});

    fields.forEach((field) => {
      if (!form[field]) {
        included = false;
        setErrors((prevState) => ({
          ...prevState,
          [field]: {
            message: `${field} is required!`,
          },
        }));
      }
    });

    return included;
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted", form);

    if (isRequired(["title", "code", "description", "points", "level"])) {
      let token = localStorage.getItem("token");

      axios
        .post("/courses", form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          navigate("/courses");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Grid item xs={8}>
      <h1>Create New Course</h1>

      <div className="form-group">
        <Typography>Course Title: </Typography>
        <TextField
          label="Title"
          name="title"
          variant="filled"
          onChange={handleForm}
          error={errors.title}
          helperText={errors.title?.message}
        />
      </div>

      <div className="form-group">
        <Typography>Code: </Typography>
        <TextField
          label="Code"
          name="code"
          variant="filled"
          onChange={handleForm}
          error={errors.code}
          helperText={errors.code?.message}
        />
      </div>

      <div className="form-group">
        <Typography>Description: </Typography>
        <TextField
          multiline
          label="Description"
          name="description"
          variant="filled"
          onChange={handleForm}
          error={errors.description}
          helperText={errors.description?.message}
        />
      </div>

      <div className="form-group">
        <Typography>Points: </Typography>
        <TextField
          type="number"
          label="Points"
          name="points"
          variant="filled"
          onChange={handleForm}
          error={errors.points}
          helperText={errors.points?.message}
        />
      </div>

      <div className="form-group">
        <Typography>Level: </Typography>
        <Slider
          sx={{ m: 1, maxWidth: 350 }}
          step={1}
          marks
          min={6}
          max={10}
          valueLabelDisplay="auto"
          name="level"
          onChange={handleForm}
          error={errors.level}
          helperText={errors.level?.message}
        />
      </div>

      <Button className='form-group' variant="contained" onClick={submitForm}>
        Submit
      </Button>
    </Grid>
  );
};

export default Create;
