import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signout } from "../../api/authApi";  // your signout API helper
import { clearJWT } from "../../auth/authHelper";  // your auth helper to clear JWT

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await signout();  // Call backend to clear cookie/session
      clearJWT(() => {
        navigate("/signin");  // Redirect to signin after clearing JWT
      });
    };

    logout();
  }, [navigate]);

  return <p>Signing out...</p>;
};

export default Signout;
