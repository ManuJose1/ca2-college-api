import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import {useAuth} from './contexts/AuthContext';

//Components
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

//Pages
import Home from "./pages/Home";
import CoursesIndex from "./pages/courses/Index";
import CoursesShow from "./pages/courses/Show";
import LecturersIndex from "./pages/lecturers/Index";
import EnrolmentsIndex from "./pages/enrolments/Index";

const App = () => {
  const {authenticated, onAuthenticated} = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      onAuthenticated(true);
    }
  }, []);

  //Protected routes
  // <Route path="/courses/:id" element={<CoursesIndex/>} />
  // <Route path="/courses/id/edit" element={<CoursesIndex/>} />

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/courses" element={<CoursesIndex/>} />
            <Route path="/courses/:id" element={<CoursesShow/>} />
            <Route path="/lecturers" element={<LecturersIndex/>} />
            <Route path="/courses/id/edit" element={<CoursesIndex/>} />

            <Route path="/enrolments" element={<EnrolmentsIndex/>} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
