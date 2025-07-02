import { Toaster } from "react-hot-toast";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Home/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';

function App() {


  return (
    <div>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
      </Routes>
      <Toaster toastOptions={{
        style: {
          fontSize: "13px"
        }
      }} />
    </div>
  )
}

export default App
