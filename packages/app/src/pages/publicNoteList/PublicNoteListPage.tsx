import { ErrorBox, NiceHeading, VStack } from "@login-app/ui";
import { useLoginUser } from "../../data/LoginUserHooks";
import { Note } from "../../data/Note";
import { usePublicNotes } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";

export const PublicNoteListPage: React.VFC = () => {
  const loginUser = useLoginUser();
  const [notes, notesError] = usePublicNotes();

  if (!notes) {
    return <>...</>;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title="Home">
      <VStack>
        <NiceHeading>Public notes</NiceHeading>
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
      <p
        style={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        <small>{note.body}</small>
      </p>
    </div>
  );
};
