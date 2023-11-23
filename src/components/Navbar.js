import { Link } from "react-router-dom";
import axios from "../config/api";
import { useAuth } from "../contexts/AuthContext";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
} from "@mui/material/";

const Navbar = () => {
  const {authenticated, onAuthenticated} = useAuth();

  let logoutButton;

  // const onLogout = () => {

  //   axios.get('/logout')
  //        .then()
  //        .catch()
  // }

  if (!authenticated) {
    logoutButton = (
      <Button
        onClick={() => onAuthenticated(false)}
        color="inherit"
      >
        Logout
      </Button>
    );
  } else {
    logoutButton = (
      <Button
        onClick={() => onAuthenticated(true)}
        color="inherit"
        component={Link}
        to="/"
      >
        Login
      </Button>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            CA-2
          </IconButton>
          <MenuItem>
            <Button
              color="inherit"
              textAlign="center"
              component={Link}
              to="/courses"
            >
              COURSES
            </Button>
            <Button
              color="inherit"
              textAlign="center"
              component={Link}
              to="/lecturers"
            >
              LECTURERS
            </Button>
            <Button
              color="inherit"
              textAlign="center"
              component={Link}
              to="/enrolments"
            >
              ENROLEMENTS{" "}
            </Button>
          </MenuItem>
          {logoutButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
