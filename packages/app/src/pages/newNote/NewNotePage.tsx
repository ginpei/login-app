import { LoadingScreen, NiceHeading, VStack } from "@login-app/ui";
import { useLoginUser } from "../../data/LoginUserHooks";
import { usePublicNotes } from "../../data/noteHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";

export const NewNotePage: React.VFC = () => {
  const loginUser = useLoginUser();
  const [notes, notesError] = usePublicNotes();

  if (!notes) {
    return <LoadingScreen title="Public notes" />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title="Home">
      <VStack>
        <NiceHeading>New note</NiceHeading>
      </VStack>
    </AppBasicLayout>
  );
};
