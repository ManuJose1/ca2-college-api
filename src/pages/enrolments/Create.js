import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
  return <></>;
};

export default Create;
