import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Rooms from "./Pages/Rooms";
import RoomDetail from "./Pages/RoomDetail";
import Messages from "./Pages/Messages";

// Admin Pages
import AdminLayout from "./Pages/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminRooms from "./Pages/Admin/Rooms";
import Bookings from "./Pages/Admin/Bookings";
import Users from "./Pages/Admin/Users";
import Chat from "./Pages/Admin/Chat";

// Saler Pages
import SalerLayout from "./Pages/Saler/SalerLayout";
import SalerDashboard from "./Pages/Saler/Dashboard";
import SalerRooms from "./Pages/Saler/Rooms";
import SalerBookings from "./Pages/Saler/Bookings";
import SalerUsers from "./Pages/Saler/Users";
import SalerChat from "./Pages/Saler/Chat";


function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<Home />} />
        <Route path="/thong-tin-ca-nhan" element={<Profile />} />
        <Route path="/phong-tro" element={<Rooms />} />
        <Route path="/phong-tro/:slug" element={<RoomDetail />} />
        <Route path="/tin-nhan" element={<Messages />} />
        <Route path="/tin-nhan/:roomId" element={<Messages />} />

        {/* Admin routes with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="rooms" element={<AdminRooms />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        {/* Saler routes with layout */}
        <Route path="/saler" element={<SalerLayout />}>
          <Route index element={<SalerDashboard />} />
          <Route path="rooms" element={<SalerRooms />} />
          <Route path="bookings" element={<SalerBookings />} />
          <Route path="users" element={<SalerUsers />} />
          <Route path="chat" element={<SalerChat />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
