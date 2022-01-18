import {
  ErrorBox,
  LineClamp,
  LoadingScreen,
  NiceHeading,
  VStack,
} from "@login-app/ui";
import { Link, useParams } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { Note } from "../../data/Note";
import { useNote } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { NotFoundPage } from "../notFound/NotFoundPage";
import { publicNoteListPagePath } from "../publicNoteList/publicNoteListPageMeta";

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
        <p>TODO</p>
      </VStack>
    </AppBasicLayout>
  );
};
