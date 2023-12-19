import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../config/api";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Edit = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  const [lecturer, setLecturer] = useState(null);

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

    if (isRequired(["name", "address", "email", "phone"])) {
      let token = localStorage.getItem("token");

      axios
        .put(`/lecturers/${id}`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          navigate("/lecturers");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
      <Grid item xs={8}>
        <h1>Edit Lecturer</h1>

        <div className="form-group">
        <Typography>Lecturer Name: </Typography>
        <TextField
          label="Name"
          name="name"
          variant="filled"
          onChange={handleForm}
          error={errors.name}
          helperText={errors.name?.message}
        />
        </div>

        <div className="form-group">
        <Typography>Address: </Typography>
        <TextField
          label="Address"
          name="address"
          variant="filled"
          onChange={handleForm}
          error={errors.address}
          helperText={errors.address?.message}
        />
        </div>

        <div className="form-group">
        <Typography>E-Mail: </Typography>
        <TextField
          label="E-mail"
          name="email"
          variant="filled"
          onChange={handleForm}
          error={errors.email}
          helperText={errors.email?.message}
        />
        </div>

        <div className="form-group">
        <Typography>Phone: </Typography>
        <TextField
          type="number"
          label="Phone"
          name="phone"
          variant="filled"
          onChange={handleForm}
          error={errors.phone}
          helperText={errors.phone?.message}
        />
        </div>

        <Button className='form-group' variant="contained" onClick={submitForm}>
        Submit
      </Button>
      </Grid>
    );
};

export default Edit;
