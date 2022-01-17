import { useCurrentUser } from "@login-app/firebase-utils";
import { BasicLayout, NiceHeading, VStack } from "@login-app/ui";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage: React.FC = (props) => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return <LoginScreen title="Profile" />;
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
