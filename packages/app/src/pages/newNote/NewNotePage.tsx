import { sleep, toError } from "@login-app/misc/out";
import { ErrorBox, NiceHeading, VStack } from "@login-app/ui";
import { useState } from "react";
import { useLoginUser } from "../../data/LoginUserHooks";
import { createNote, Note, NoteHandler } from "../../data/Note";
import { saveNote } from "../../data/noteDb";
import { logError } from "../../misc/log";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { NoteForm } from "./NoteForm";

export const NewNotePage: React.VFC = () => {
  const loginUser = useLoginUser();
  const [error, setError] = useState<Error | null>(null);

  return (
    <AppBasicLayout loginUser={loginUser} title="Home">
      <VStack>
        <NiceHeading>New note</NiceHeading>
        {error && <ErrorBox errors={[error]} />}
        <NoteAutoForm onError={setError} />
      </VStack>
    </AppBasicLayout>
  );
};

const NoteAutoForm: React.VFC<{
  onError: (error: Error | null) => void;
}> = ({ onError }) => {
  const user = useLoginUser();
  const [note, setNote] = useState(createNote());
  const [saving, setSaving] = useState(false);

  const onChange: NoteHandler = (newNote) => {
    setNote(newNote);
  };

  const onSubmit: NoteHandler = async () => {
    onError(null);
    setSaving(true);
    try {
      if (!user) {
        throw new Error("Login required");
      }

      const userNote: Note = {
        ...note,
        userId: user.id,
      };
      const [, noteDoc] = await Promise.all([sleep(200), saveNote(userNote)]);
      const { id } = noteDoc;
      window.alert(`Note: ${id}`);
      // TODO locate to note view page
    } catch (errorish) {
      const error = toError(errorish);
      logError(error);
      onError(error);

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
