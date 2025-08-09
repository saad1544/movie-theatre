import AdminDashboard from './pages/AdminDashboard';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddMovie from "./components/AddMovie";
import AddGenre from './components/AddGenre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/AddGenre" element={<AddGenre/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
