import { NiceHeading, VStack } from "@login-app/ui";
import { Link } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { dashboardPagePath } from "../dashboard/dashboardPageMeta";
import { loginPagePath } from "../login/loginPageMeta";
import { noteMyListPagePath } from "../noteMyList/notePublicListPageMeta";
import { notePublicListPagePath } from "../notePublicList/notePublicListPageMeta";
import { ProfilePagePath } from "../profile/profilePageMeta";

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
          <Link to={dashboardPagePath()}>Dashboard</Link>
        </p>
        <p>
          <Link to={ProfilePagePath()}>Profile</Link>
        </p>
        <p>
          <Link to={noteMyListPagePath()}>My notes</Link>
        </p>
        <p>
          <Link to={notePublicListPagePath()}>Public notes</Link>
        </p>
      </VStack>
    </AppBasicLayout>
  );
};
