import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Callback from "./components/Callback";
import Dashboard from "./components/Dashboard";
import Sample from "./components/DashboardSample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={() => {}} />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
