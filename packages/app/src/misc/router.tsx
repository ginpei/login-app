import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../screens/home/HomePage";
import { homePagePath } from "../screens/home/homePageMeta";
import { LoginPage } from "../screens/login/LoginPage";
import { loginPagePath } from "../screens/login/loginPageMeta";
import { NotFoundPage } from "../screens/noteFound/NotFoundPage";
import { ProfilePage } from "../screens/profile/ProfilePage";
import { ProfilePagePath } from "../screens/profile/profilePageMeta";

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
