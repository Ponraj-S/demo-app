import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./SideBar";
import SubmitLeave from "./SubmitLeave";
import LeaveReq from "./LeaveReq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/leavereq" element={<LeaveReq />} />
        <Route path="/submitLeave" element={<SubmitLeave />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
