import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/signUp";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Summary from "./components/summary";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
  );
}

export default App;