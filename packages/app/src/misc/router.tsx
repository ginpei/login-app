import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { homePagePath } from "../pages/home/homePageMeta";
import { LoginPage } from "../pages/login/LoginPage";
import { loginPagePath } from "../pages/login/loginPageMeta";
import { NewNotePage } from "../pages/newNote/NewNotePage";
import { newNotePagePath } from "../pages/newNote/newNotePageMeta";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { ProfilePagePath } from "../pages/profile/profilePageMeta";
import { PublicNoteListPage } from "../pages/publicNoteList/PublicNoteListPage";
import { publicNoteListPagePath } from "../pages/publicNoteList/publicNoteListPageMeta";
import { NoteViewPage } from "../pages/viewNote/NoteViewPage";
import { noteViewPageRoute } from "../pages/viewNote/noteViewPageMeta";

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={homePagePath()} element={<HomePage />} />
        <Route path={loginPagePath()} element={<LoginPage />} />
        <Route path={ProfilePagePath()} element={<ProfilePage />} />
        <Route
          path={publicNoteListPagePath()}
          element={<PublicNoteListPage />}
        />
        <Route path={newNotePagePath()} element={<NewNotePage />} />
        <Route path={noteViewPageRoute} element={<NoteViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
