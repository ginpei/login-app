import { LineClamp } from "@login-app/ui/out";
import { Link } from "react-router-dom";
import { Note } from "../../data/Note";
import { noteViewPagePath } from "../../pages/noteView/noteViewPageMeta";

export const NoteListItem: React.VFC<{ note: Note }> = ({ note }) => {
  return (
    <LineClamp lines={3}>
      <Link to={noteViewPagePath(note.id)}>{note.title}</Link>{" "}
      <small>
        ({new Intl.DateTimeFormat().format(new Date(note.createdAt))})
      </small>
      {note.body && " - "}
      <small>{note.body}</small>
    </LineClamp>
  );
};
