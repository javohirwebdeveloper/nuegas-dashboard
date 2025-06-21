import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
/*import MentorsPage from "./pages/MentorsPage";
import MessagesPage from "./pages/MessagesPage";
import TasksPage from "./pages/TasksPage";
import SettingsPage from "./pages/SettingsPage";*/
import PrivateRoute from "./routes/PrivateRoute";
import ThemeToggle from "./contexts/ThemeToggle";
function App() {
  return (
      <div>
        {/* Theme toggle visible globally */}
          <ThemeToggle />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />

          {/* Future routes */}
          {/* 
          <Route path="/mentors" element={<PrivateRoute><MentorsPage /></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute><MessagesPage /></PrivateRoute>} />
          <Route path="/tasks" element={<PrivateRoute><TasksPage /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
          */}
        </Routes>
      </div>
  );
}

export default App;
