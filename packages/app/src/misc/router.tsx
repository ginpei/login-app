import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { homePagePath } from "../pages/home/homePageMeta";
import { LoginPage } from "../pages/login/LoginPage";
import { loginPagePath } from "../pages/login/loginPageMeta";
import { NoteEditPage } from "../pages/noteEdit/NoteEditPage";
import { noteEditPageRoute } from "../pages/noteEdit/noteEditPageMeta";
import { NoteNewPage } from "../pages/noteNew/NoteNewPage";
import { noteNewPagePath } from "../pages/noteNew/noteNewPageMeta";
import { NotePublicListPage } from "../pages/notePublicList/NotePublicListPage";
import { notePublicListPagePath } from "../pages/notePublicList/notePublicListPageMeta";
import { NoteViewPage } from "../pages/noteView/NoteViewPage";
import { noteViewPageRoute } from "../pages/noteView/noteViewPageMeta";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { ProfilePagePath } from "../pages/profile/profilePageMeta";

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={homePagePath()} element={<HomePage />} />
        <Route path={loginPagePath()} element={<LoginPage />} />
        <Route path={ProfilePagePath()} element={<ProfilePage />} />
        <Route
          path={notePublicListPagePath()}
          element={<NotePublicListPage />}
        />
        <Route path={noteNewPagePath()} element={<NoteNewPage />} />
        <Route path={noteViewPageRoute} element={<NoteViewPage />} />
        <Route path={noteEditPageRoute} element={<NoteEditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
