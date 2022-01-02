import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { HomePage } from "../screens/home/HomePage";
import { homePagePath } from "../screens/home/homePageMeta";
import { LoginPage } from "../screens/login/LoginPage";
import { loginPagePath } from "../screens/login/loginPageMeta";
import { NotFoundPage } from "../screens/noteFound/NotFoundPage";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={homePagePath()} element={<HomePage />} />
        <Route path={loginPagePath()} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
