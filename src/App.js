import './App.css';
import LoginButton from "./components/LoginButton";
import LogoutButton from './components/LogoutButton';
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <LoginButton/>      {/* shows login button */}
      <LogoutButton/>     {/* shows logout button */}
      <Profile/>          {/* shows logged in user information */}
    </>
  );
}

export default App;
