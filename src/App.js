import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./SideBar";
import SubmitLeave from "./SubmitLeave";
import LeaveReq from "./LeaveReq";
import GoogleSignInButton from "./GoogleLogin";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<GoogleSignInButton />} />
          <Route
            path="/home"
            element={<PrivateRoute element={<Sidebar />} />} />
          <Route
            path="/leavereq"
            element={<PrivateRoute element={<LeaveReq />} />}
          />
          <Route
            path="/submitLeave"
            element={<PrivateRoute element={<SubmitLeave />} />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
