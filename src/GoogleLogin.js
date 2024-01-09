import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./AuthContext";

const GoogleSignInButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(
      credentialResponse.credential
    );
    console.log(credentialResponseDecoded);

    const isLoginSuccessful = true

    if (isLoginSuccessful) {
      login();
      navigate("/home");
    } else {
      console.log("Login not successful");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <p>You are authenticated! Redirecting to /home...</p>
      )}
    </div>
  );
};

export default GoogleSignInButton;
