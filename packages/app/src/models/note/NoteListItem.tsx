import { LineClamp } from "@login-app/ui/out";
import { Link } from "react-router-dom";
import { Note } from "../../data/Note";
import { noteViewPagePath } from "../../pages/noteView/noteViewPageMeta";

export const NoteListItem: React.VFC<{ note: Note }> = ({ note }) => {
  return (
    <Link to={noteViewPagePath(note.id)}>
      <p>{note.title}</p>
      <LineClamp lines={3}>
        <small>{note.body}</small>
      </LineClamp>
    </Link>
  );
};
