import { sleep, toError } from "@login-app/misc/out";
import { ErrorBox, NiceHeading, VStack } from "@login-app/ui";
import { useState } from "react";
import { useLoginUser } from "../../data/LoginUserHooks";
import { createNote, NoteHandler } from "../../data/Note";
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
  const [note, setNote] = useState(createNote());
  const [saving, setSaving] = useState(false);

  const onChange: NoteHandler = (newNote) => {
    setNote(newNote);
  };

  const onSubmit: NoteHandler = async () => {
    onError(null);
    setSaving(true);
    try {
      // TODO implement
      await sleep(500);
      console.log("# note", note);
      throw new Error("Ho ho ho");
    } catch (newError) {
      console.error(newError);
      onError(toError(newError));
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
