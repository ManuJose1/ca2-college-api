import { useEffect, useState } from "react";
import axios from "../../config/api";
import Loading from "../../components/Loading";
import LecturerCard from "../../components/LecturerCard";
import { useAuth } from "../../contexts/AuthContext";

const Index = () => {
    const { authenticated } = useAuth();
    const [lecturers, setLecturers] = useState(null);
    let token = localStorage.getItem("token");

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
    
      const removeLecturer = (id) => {
        let updatedLecturers = lecturers.filter((lecturer) => {
          return lecturer._id !== id;
        });
        setLecturers(updatedLecturers);
      };
    
      if (!lecturers) return <Loading />;

      const lecturersList = lecturers.map((lecturer) => {
        return (
          <>
            <LecturerCard
              key={lecturer.id}
              lecturer={lecturer}
              authenticated={authenticated}
              deleteCallback={removeLecturer}
            />
            <br />
          </>
        );
      });
    

    return(
        <>
        <h1>All Lecturers</h1>
        {lecturersList}
        </>
    )
};

export default Index;