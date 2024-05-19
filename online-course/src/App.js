import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import Course from "./components/Courses/Course";
import Register from "./components/Register/Register";
import RegistrationsAll from "./components/Admin/RegistrationsAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin/reg' element={<RegistrationsAll />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
