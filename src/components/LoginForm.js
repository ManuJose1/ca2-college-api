import axios from "../config/api";
import { useState } from "react";
import {useAuth} from '../contexts/AuthContext';
import { TextField, Button, Card, Typography } from "@mui/material";

const LoginForm = () => {

  const {authenticated, onAuthenticated} = useAuth();

  const errorStyle = {
    color: "red",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    console.log("clicked", form);
    axios
      .post("/login", {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        console.log(response.data.token);
        onAuthenticated(true, response.data.token);
       // authenticated = true;
      })
      .catch((err) => {
        console.error(err);
        console.log(err.response);
        setErrorMessage(err.response);
      });
  };

    return (
      <>
        <Card variant="outlined" sx={{ m: 2, p: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ pl: 2 }}
          >
            Log In
          </Typography>
          <hr></hr>
          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            type="text"
            name="email"
            onChange={handleForm}
            sx={{ m: 2 }}
          />
          <br />
          <TextField
            id="outlined-password"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={handleForm}
            sx={{ m: 2 }}
          />
          <br />
          <Button variant="contained" onClick={handleClick} sx={{ m: 2 }}>
            Submit
          </Button>
          <p style={errorStyle}>{errorMessage}</p>
        </Card>
      </>
    );
};

export default LoginForm;
