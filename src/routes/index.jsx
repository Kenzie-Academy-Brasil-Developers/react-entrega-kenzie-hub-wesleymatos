import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const RoutMain = ({ setUser, user }) => (
  <Routes>
    <Route path="/" element={<LoginPage setUser={setUser} />} />
    <Route path="/Register/" element={<RegisterPage />} />
    <Route path="/Home/" element={<HomePage user={user} />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutMain;
