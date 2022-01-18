import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link, useParams, useRoutes } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { createNote, Note } from "../../data/Note";
import { useNote, usePublicNotes } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { newNotePagePath } from "../newNote/newNotePageMeta";
import { NotFoundPage } from "../notFound/NotFoundPage";
import { publicNoteListPagePath } from "../publicNoteList/publicNoteListPageMeta";

export const NoteViewPage: React.VFC = () => {
  const { noteId } = useParams<"noteId">();
  const loginUser = useLoginUser();
  const [note, noteError] = useNote(noteId);

  const noteTitle = note?.title || "(Untitled)";

  if (note === undefined) {
    return <LoadingScreen title="Note" />;
  }

  if (noteError) {
    // TODO ErrorScreen
    return (
      <AppBasicLayout loginUser={loginUser} title={noteTitle}>
        <VStack>
          <p>
            <Link to={publicNoteListPagePath()}>Public note list</Link>
          </p>
          {noteError && <ErrorBox errors={[noteError]} />}
        </VStack>
      </AppBasicLayout>
    );
  }

  if (note === null) {
    return <NotFoundPage />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={noteTitle}>
      <VStack>
        <p>
          <Link to={publicNoteListPagePath()}>Public note list</Link>
        </p>
        <NiceHeading>{noteTitle}</NiceHeading>
        <p>{note.body || <small>(Empty)</small>}</p>
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
