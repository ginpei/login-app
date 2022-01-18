import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { createNote, Note } from "../../data/Note";
import { usePublicNotes } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { newNotePagePath } from "../newNote/newNotePageMeta";

export const NoteViewPage: React.VFC = () => {
  const loginUser = useLoginUser();
  const note = createNote();

  const noteTitle = note.title || "(Untitled)";

  if (!loginUser) {
    return <LoginScreen title="Note" />;
  }

  if (note === undefined) {
    return <LoadingScreen title="Note" />;
  }

  if (note === null) {
    // TODO
    return <div>Not found</div>;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={noteTitle}>
      <VStack>
        <NiceHeading>{noteTitle}</NiceHeading>
        <p>{note.body || <small>(Empty)</small>}</p>
        {/* {notesError ? (
          <ErrorBox errors={[notesError]} />
        ) : (
          <NoteList notes={notes} />
        )} */}
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
