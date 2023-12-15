import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";

//Components
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

//Pages
import Home from "./pages/Home";

import CoursesIndex from "./pages/courses/Index";
import CoursesShow from "./pages/courses/Show";
import CoursesCreate from "./pages/courses/Create";
import CoursesEdit from "./pages/courses/Edit";

import LecturersIndex from "./pages/lecturers/Index";
import LecturersShow from "./pages/lecturers/Show";
import LecturersCreate from "./pages/lecturers/Create";
import LecturersEdit from "./pages/lecturers/Edit";

import EnrolmentsIndex from "./pages/enrolments/Index";
import EnrolmentsShow from "./pages/enrolments/Show";
import EnrolmentsCreate from "./pages/enrolments/Create";
import EnrolmentsEdit from "./pages/enrolments/Edit";

const App = () => {
  const { authenticated, onAuthenticated } = useAuth();

  useEffect(() => {
    localStorage.removeItem("token");
    onAuthenticated(false);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/courses" element={<CoursesIndex />} />
            <Route path="/courses/:id" element={<CoursesShow />} />
            <Route path="/courses/create" element={<CoursesCreate />} />
            <Route path="/courses/:id/edit" element={<CoursesEdit />} />

            <Route path="/lecturers" element={<LecturersIndex />} />
            <Route path="/lecturers/:id" element={<CoursesShow />} />
            <Route path="/lecturers/create" element={<CoursesCreate />} />
            <Route path="/lecturers/:id/edit" element={<CoursesEdit />} />

            <Route path="/enrolments" element={<EnrolmentsIndex />} />
            <Route path="/enrolments/:id" element={<CoursesShow />} />
            <Route path="/enrolments/create" element={<CoursesCreate />} />
            <Route path="/enrolments/:id/edit" element={<CoursesEdit />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
