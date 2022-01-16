import { useCurrentUser } from "@login-app/firebase-utils";
import { BasicLayout, NiceHeading, VStack } from "@login-app/ui";
import { Link } from "react-router-dom";
import { loginPagePath } from "../login/loginPageMeta";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage: React.FC = (props) => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return (
      <BasicLayout title="Profile">
        <Link to={loginPagePath()}>Login</Link>
      </BasicLayout>
    );
  }

  return (
    <BasicLayout title="Profile">
      <VStack>
        <NiceHeading>Profile</NiceHeading>
        <ProfileForm userId={currentUser.uid} />
      </VStack>
    </BasicLayout>
  );
};
