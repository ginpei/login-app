import { sleep, toError } from "@login-app/misc/out";
import {
  ErrorBox,
  LoadingScreen,
  NiceButton,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { Note, NoteHandler } from "../../data/Note";
import { deleteNote, saveNote } from "../../data/noteDb";
import { useNote } from "../../data/noteHooks";
import { logError } from "../../misc/log";
import { NoteForm } from "../../models/note/NoteForm";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { notePublicListPagePath } from "../notePublicList/notePublicListPageMeta";
import { noteViewPagePath } from "../noteView/noteViewPageMeta";
import { NotFoundPage } from "../notFound/NotFoundPage";

export const NoteEditPage: React.VFC = () => {
  const { noteId } = useParams<"noteId">();
  const navigate = useNavigate();
  const loginUser = useLoginUser();
  const [note, noteError] = useNote(noteId);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const onSave = (newNoteId: string) => {
    const url = noteViewPagePath(newNoteId);
    navigate(url);
  };

  const onSaving = (newSaving: boolean) => {
    setSaving(newSaving);
  };

  const onDelete = () => {
    navigate(notePublicListPagePath());
  };

  const onDeleting = (newDeleting: boolean) => {
    setDeleting(newDeleting);
  };

  if (note === undefined) {
    return <LoadingScreen title="Note" />;
  }

  if (noteError) {
    // TODO ErrorScreen
    return (
      <AppBasicLayout loginUser={loginUser} title="Edit note">
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

  if (!loginUser || note.userId !== loginUser.id) {
    return (
      <AppBasicLayout loginUser={loginUser} title="Edit note">
        <NiceHeading>Unauthorized</NiceHeading>
      </AppBasicLayout>
    );
  }

  return (
    <AppBasicLayout loginUser={loginUser} title="Edit note">
      <VStack>
        <p>
          <Link to={notePublicListPagePath()}>Public note list</Link>
        </p>
        <NiceHeading>Edit note</NiceHeading>
        <NoteAutoForm
          disabled={deleting}
          onSave={onSave}
          onSaving={onSaving}
          originalNote={note}
        />
        <DangerZone
          disabled={saving || deleting}
          onDelete={onDelete}
          onDeleting={onDeleting}
          originalNote={note}
        />
      </VStack>
    </AppBasicLayout>
  );
};

const NoteAutoForm: React.VFC<{
  disabled: boolean;
  onSave: (noteId: string) => void;
  onSaving: (saving: boolean) => void;
  originalNote: Note;
}> = ({ disabled, onSave, onSaving, originalNote }) => {
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

      onSave(id);
    } catch (errorish) {
      const newError = toError(errorish);
      logError(newError);
      setError(newError);

      setSaving(false);
    }
  };

  useEffect(() => {
    onSaving(saving);
  }, [saving]);

  return (
    <NoteForm
      disabled={disabled || saving}
      note={note}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

const DangerZone: React.FC<{
  disabled: boolean;
  onDelete: () => void;
  onDeleting: (deleting: boolean) => void;
  originalNote: Note;
}> = ({ disabled, onDelete, onDeleting, originalNote }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm(
      "Are you sure you want to delete this item? This cannot be undone."
    );
    if (ok) {
      onDeleting(true);
      await Promise.all([sleep(1000), deleteNote(originalNote.id)]);
      onDelete();
    }
  };

  return (
    <fieldset className="DangerZone" disabled={disabled}>
      <VStack>
        <NiceHeading>Danger zone</NiceHeading>
        <NiceButton onClick={onDeleteClick}>Delete</NiceButton>
      </VStack>
    </fieldset>
  );
};
