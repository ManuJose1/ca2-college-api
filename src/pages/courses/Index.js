import { useEffect, useState } from "react";
import axios from "../../config/api";
import Loading from '../../components/Loading';
import CourseCard from "../../components/CourseCard";
import { useAuth } from "../../contexts/AuthContext";

const Index = (props) => {

  const {authenticated} = useAuth();

    const [courses, setCourses] = useState(null);

    let token = localStorage.getItem("token");
  
    useEffect(() => {
        axios
          .get("/courses", {
            headers: {
              "Authorization": `Bearer ${token}`,
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
        let updatedCourses = courses.filter((course)=>{
          return course._id !== id;
        });
        setCourses(updatedCourses);
      }

      if (!courses) return <Loading />;

      const coursesList = courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            course={course}
            authenticated={props.authenticated}
            deleteCallback={removeCourse}
          />
        );
      });
    
    return(
        <>
        Helllo from courses
        {coursesList}
        </>
    )
};

export default Index;