import { NiceHeading, VStack } from "@login-app/ui";
import { useLoginUser } from "../../data/LoginUserHooks";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage: React.FC = (props) => {
  const loginUser = useLoginUser();

  if (!loginUser) {
    return <LoginScreen loginUser={loginUser} title="Profile" />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title="Profile">
      <VStack>
        <NiceHeading>Profile</NiceHeading>
        <ProfileForm userId={loginUser.id} />
      </VStack>
    </AppBasicLayout>
  );
};
