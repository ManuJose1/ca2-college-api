import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";
import { useAuth } from "../contexts/AuthContext";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Container,
} from "@mui/material/";

const Navbar = () => {
  const { authenticated, onAuthenticated } = useAuth();
  let token = localStorage.getItem("token");
  let logoutButton;
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(localStorage);
        localStorage.removeItem(token);
        onAuthenticated(false);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  if (authenticated) {
    logoutButton = (
      <Button onClick={handleLogout} color="inherit">
        Logout
      </Button>
    );
  } else if (!authenticated) {
    logoutButton = (
      <Button onClick={navigate("/")} color="inherit">
        Login
      </Button>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
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
               // textAlign="center"
                component={Link}
                to="/courses"
              >
                COURSES
              </Button>
              <Button
                color="inherit"
                //textAlign="center"
                component={Link}
                to="/lecturers"
              >
                LECTURERS
              </Button>
              <Button
                color="inherit"
                //textAlign="center"
                component={Link}
                to="/enrolments"
              >
                ENROLEMENTS
              </Button>
            </MenuItem>
            {logoutButton}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
