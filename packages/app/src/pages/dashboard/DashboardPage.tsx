import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@ginpei/ui-react";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { Note } from "../../data/Note";
import { useUserNotes } from "../../data/noteHooks";
import { NoteListItem } from "../../models/note/NoteListItem";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { loginPagePath } from "../login/loginPageMeta";
import { noteNewPagePath } from "../noteNew/noteNewPageMeta";
import { noteViewPagePath } from "../noteView/noteViewPageMeta";
import { ProfilePagePath } from "../profile/profilePageMeta";

export const DashboardPage: React.VFC = () => {
  const title = "Dashboard";
  const loginUser = useLoginUser();
  const [notes, notesError] = useUserNotes(loginUser?.id);

  if (!loginUser) {
    return <LoginScreen title={title} />;
  }

  if (!notes) {
    return <LoadingScreen title={title} />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={title}>
      <VStack>
        <NiceHeading>{title}</NiceHeading>
        <p>
          <Link to={noteNewPagePath()}>New note...</Link>
          {" | "}
          <Link to={ProfilePagePath()}>Profile</Link>
          {" | "}
          <Link to={loginPagePath()}>Logout...</Link>
        </p>
        <NiceHeading>My notes</NiceHeading>
        {notesError ? (
          <ErrorBox errors={[notesError]} />
        ) : (
          <NoteList notes={notes} />
        )}
      </VStack>
    </AppBasicLayout>
  );
};

const NoteList: React.VFC<{ notes: Note[] }> = ({ notes }) => {
  if (notes.length < 1) {
    return (
      <p>
        <small>(No items)</small>
      </p>
    );
  }

  return (
    <VStack className="NoteList">
      {notes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </VStack>
  );
};
