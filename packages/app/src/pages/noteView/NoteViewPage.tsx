import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link, useParams } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { Note } from "../../data/Note";
import { useNote } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { noteEditPagePath } from "../noteEdit/noteEditPageMeta";
import { notePublicListPagePath } from "../notePublicList/notePublicListPageMeta";
import { NotFoundPage } from "../notFound/NotFoundPage";

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
            <Link to={notePublicListPagePath()}>Public note list</Link>
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
          <Link to={notePublicListPagePath()}>Public note list</Link>
          {note.userId === loginUser?.id && (
            <>
              {" | "}
              <Link to={noteEditPagePath(note.id)}>Edit</Link>
            </>
          )}
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
