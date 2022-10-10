import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const RoutMain = ({ setUser, user }) => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/Register/" element={<RegisterPage />} />
    <Route path="/Home/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutMain;
