import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { Note } from "../../data/Note";
import { useUserNotes } from "../../data/noteHooks";
import { NoteListItem } from "../../models/note/NoteListItem";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { noteNewPagePath } from "../noteNew/noteNewPageMeta";
import { noteViewPagePath } from "../noteView/noteViewPageMeta";

export const NoteMyListPage: React.VFC = () => {
  const title = "My notes";
  const loginUser = useLoginUser();
  const [notes, notesError] = useUserNotes(loginUser?.id);

  if (!notes) {
    return <LoadingScreen title={title} />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={title}>
      <VStack>
        <NiceHeading>My notes</NiceHeading>
        <p>
          <Link to={noteNewPagePath()}>New note...</Link>
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
