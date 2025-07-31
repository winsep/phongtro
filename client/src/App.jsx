import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Rooms from "./Pages/Rooms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thong-tin-ca-nhan" element={<Profile />} />
        <Route path="/phong-tro" element={<Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;
