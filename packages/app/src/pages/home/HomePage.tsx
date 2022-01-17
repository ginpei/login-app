import { NiceHeading, VStack } from "@login-app/ui";
import { Link } from "react-router-dom";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { loginPagePath } from "../login/loginPageMeta";
import { ProfilePagePath } from "../profile/profilePageMeta";

export const HomePage: React.FC = (props) => {
  return (
    <AppBasicLayout title="Home">
      <VStack>
        <NiceHeading>Home</NiceHeading>
        <p>
          <Link to={loginPagePath()}>Login</Link>
        </p>
        <p>
          <Link to={ProfilePagePath()}>Profile</Link>
        </p>
      </VStack>
    </AppBasicLayout>
  );
};
