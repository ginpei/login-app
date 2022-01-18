import { sleep, toError } from "@login-app/misc/out";
import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { Note, NoteHandler } from "../../data/Note";
import { saveNote } from "../../data/noteDb";
import { useNote } from "../../data/noteHooks";
import { logError } from "../../misc/log";
import { NoteForm } from "../../models/note/NoteForm";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { NotFoundPage } from "../notFound/NotFoundPage";
import { publicNoteListPagePath } from "../publicNoteList/publicNoteListPageMeta";
import { noteViewPagePath } from "../viewNote/noteViewPageMeta";

export const NoteEditPage: React.VFC = () => {
  const { noteId } = useParams<"noteId">();
  const loginUser = useLoginUser();
  const [note, noteError] = useNote(noteId);

  if (note === undefined) {
    return <LoadingScreen title="Note" />;
  }

  if (noteError) {
    // TODO ErrorScreen
    return (
      <AppBasicLayout loginUser={loginUser} title="Edit note">
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
    <AppBasicLayout loginUser={loginUser} title="Edit note">
      <VStack>
        <p>
          <Link to={publicNoteListPagePath()}>Public note list</Link>
        </p>
        <NiceHeading>Edit note</NiceHeading>
        <NoteAutoForm originalNote={note} />
      </VStack>
    </AppBasicLayout>
  );
};

const NoteAutoForm: React.VFC<{ originalNote: Note }> = ({ originalNote }) => {
  const navigate = useNavigate();
  const user = useLoginUser();
  const [note, setNote] = useState(originalNote);
  const [error, setError] = useState<Error | null>(null);
  const [saving, setSaving] = useState(false);

  const onChange: NoteHandler = (newNote) => {
    setNote(newNote);
  };

  const onSubmit: NoteHandler = async () => {
    setError(null);
    setSaving(true);
    try {
      if (!user) {
        throw new Error("Login required");
      }

      const userNote: Note = {
        ...note,
        userId: user.id,
      };
      const [, noteDoc] = await Promise.all([sleep(1000), saveNote(userNote)]);
      const { id } = noteDoc;

      const url = noteViewPagePath(id);
      navigate(url);
    } catch (errorish) {
      const newError = toError(errorish);
      logError(newError);
      setError(newError);

      setSaving(false);
    }
  };

  return (
    <NoteForm
      disabled={saving}
      note={note}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
