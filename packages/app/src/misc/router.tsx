import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { homePagePath } from "../pages/home/homePageMeta";
import { LoginPage } from "../pages/login/LoginPage";
import { loginPagePath } from "../pages/login/loginPageMeta";
import { NotFoundPage } from "../pages/noteFound/NotFoundPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { ProfilePagePath } from "../pages/profile/profilePageMeta";

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={homePagePath()} element={<HomePage />} />
        <Route path={loginPagePath()} element={<LoginPage />} />
        <Route path={ProfilePagePath()} element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
