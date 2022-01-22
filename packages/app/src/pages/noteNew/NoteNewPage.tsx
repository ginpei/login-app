import { sleep, toError } from "@login-app/misc/out";
import { ErrorBox, NiceHeading, VStack } from "@login-app/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { createNote, Note, NoteHandler } from "../../data/Note";
import { saveNote } from "../../data/noteDb";
import { logError } from "../../misc/log";
import { NoteForm } from "../../models/note/NoteForm";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { noteViewPagePath } from "../noteView/noteViewPageMeta";

export const NoteNewPage: React.VFC = () => {
  const title = "New note";
  const loginUser = useLoginUser();
  const [error, setError] = useState<Error | null>(null);

  if (!loginUser) {
    return <LoginScreen title={title} />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title={title}>
      <VStack>
        <NiceHeading>{title}</NiceHeading>
        {error && <ErrorBox errors={[error]} />}
        <NoteAutoForm onError={setError} />
      </VStack>
    </AppBasicLayout>
  );
};

const NoteAutoForm: React.VFC<{
  onError: (error: Error | null) => void;
}> = ({ onError }) => {
  const navigate = useNavigate();
  const user = useLoginUser();
  const [note, setNote] = useState(createNote({ shareLevel: "public" }));
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

      const url = noteViewPagePath(id);
      navigate(url);
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
