import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signout } from "../../api/auth";  // your signout API helper
import { clearJWT } from "../../helpers/auth.helper";

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
