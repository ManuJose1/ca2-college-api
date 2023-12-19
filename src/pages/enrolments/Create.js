import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Slider, Typography } from "@mui/material";

const Create = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(null);
  const [lecturers, setLecturers] = useState(null);
  let token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    code: "",
    description: "",
    points: "",
    level: "",
  });

  // Get lecturers
  useEffect(() => {
    axios
      .get("/lecturers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setLecturers(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  // Get courses
  useEffect(() => {
    axios
      .get("/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCourses(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);


  return <></>;
};

export default Create;
