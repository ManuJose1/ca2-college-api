import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const {authenticated, onAuthenticated} = useAuth();
  if (!authenticated) {
    return (
      <LoginForm authenticated={authenticated} onAuthenticated={onAuthenticated} />
    );
  }else{
    return(
      <>
      <h1>You are logged in !</h1>
      </>
    );
  }
};

export default Home;
