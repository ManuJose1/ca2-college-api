import { useEffect, useState } from "react";
import axios from "../../config/api";
import Loading from "../../components/Loading";
import CourseCard from "../../components/CourseCard";
import { useAuth } from "../../contexts/AuthContext";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";

const Index = () => {
  const { authenticated } = useAuth();
  const [courses, setCourses] = useState(null);
  let token = localStorage.getItem("token");

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

  const removeCourse = (id) => {
    let updatedCourses = courses.filter((course) => {
      return course._id !== id;
    });
    setCourses(updatedCourses);
  };

  if (!courses) return <Loading />;

  const coursesList = courses.map((course) => {
    return (
      <div>
        <CourseCard
          key={course.id}
          course={course}
          authenticated={authenticated}
          //deleteCallback={removeCourse}
        />
          

        <br />
      </div>
    );
  });

  return (
    <>
      <Grid container alignItems="center">
        <h1>All Courses</h1>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button
          startIcon={<Add />}
          size="md"
          component={Link}
          to={"/courses/create"}
        >
          Create Course
        </Button>
      </Grid>

      <br />

      {coursesList}
    </>
  );
};

export default Index;
