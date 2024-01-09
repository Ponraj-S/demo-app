import React from "react";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    element
  ) : (
    <p style={{textAlign:'center'}}>You need to Login First</p>
  )
}
export default PrivateRoute;