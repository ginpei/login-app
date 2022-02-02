import { NiceHeading, VStack } from "@login-app/ui-react";
import { useLoginUser } from "../../data/LoginUserContext";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage: React.FC = () => {
  const loginUser = useLoginUser();

  if (!loginUser) {
    return <LoginScreen title="Profile" />;
  }

  return (
    <AppBasicLayout loginUser={loginUser} title="Profile">
      <VStack>
        <NiceHeading>Profile</NiceHeading>
        <ProfileForm loginUser={loginUser} />
      </VStack>
    </AppBasicLayout>
  );
};
