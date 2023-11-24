import { useEffect, useState } from "react";
import axios from "../../config/api";
import Loading from '../../components/Loading';
import CourseCard from "../../components/CourseCard";
import { useAuth } from "../../contexts/AuthContext";
import EnrolmentCard from "../../components/EnrolmentCard";


const Index = () => {

    const {authenticated} = useAuth();
    const [enrolments, setEnrolments] = useState(null);
    let token = localStorage.getItem("token");

    useEffect(() => {
        axios
          .get("/enrolments", {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data.data);
            setEnrolments(response.data.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [token]);

      if (!enrolments) return <Loading />;

      const enrolmentsList = enrolments.map((enrolment) => {
        return (
          <>
          <EnrolmentCard
            key={enrolment.id}
            enrolment={enrolment}
            authenticated={authenticated}
          //  deleteCallback={removeEnrolment}
          />
          <br/>
          </>
        );
      });

    return(
        <>
        <h1>All Enrolments</h1>
        {enrolmentsList}
        </>
    )
};

export default Index;