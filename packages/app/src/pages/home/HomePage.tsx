import { NiceHeading, VStack } from "@login-app/ui";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { loginPagePath } from "../login/loginPageMeta";
import { ProfilePagePath } from "../profile/profilePageMeta";
import { publicNoteListPagePath } from "../publicNoteList/publicNoteListPageMeta";

export const HomePage: React.FC = (props) => {
  const loginUser = useLoginUser();

  return (
    <AppBasicLayout loginUser={loginUser} title="Home">
      <VStack>
        <NiceHeading>Home</NiceHeading>
        <p>
          <Link to={loginPagePath()}>Login</Link>
        </p>
        <p>
          <Link to={ProfilePagePath()}>Profile</Link>
        </p>
        <p>
          <Link to={publicNoteListPagePath()}>Public notes</Link>
        </p>
      </VStack>
    </AppBasicLayout>
  );
};
