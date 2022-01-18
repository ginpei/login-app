import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { Note } from "../../data/Note";
import { usePublicNotes } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { newNotePagePath } from "../newNote/newNotePageMeta";

export const PublicNoteListPage: React.VFC = () => {
  const title = "Public notes";
  const loginUser = useLoginUser();
  const [notes, notesError] = usePublicNotes();

  if (!loginUser) {
    return <LoginScreen title={title} />;
  }

  if (!notes) {
    return <LoadingScreen title={title} />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={title}>
      <VStack>
        <NiceHeading>Public notes</NiceHeading>
        <p>
          <Link to={newNotePagePath()}>New note...</Link>
        </p>
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

const NoteListItem: React.VFC<{ note: Note }> = ({ note }) => {
  return (
    <div>
      <p>{note.title}</p>
      <LineClamp lines={3}>
        <small>{note.body}</small>
      </LineClamp>
    </div>
  );
};
