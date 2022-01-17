import { useCurrentUser } from "@login-app/firebase-utils";
import { sleep, toError } from "@login-app/misc";
import { ErrorBox, NiceButton, NiceHeading, VStack } from "@login-app/ui";
import { EmailAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../misc/firebase";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { homePagePath } from "../home/homePageMeta";

const uiConfigBase: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  const onLogIn = () => {
    navigate(homePagePath());
  };

  if (currentUser === undefined) {
    return null;
  }

  if (!currentUser) {
    return <LoginScreen onLogIn={onLogIn} title="Login" />;
  }

  return <LogoutScreen />;
};

function LogoutScreen() {
  const [loggingIn, setLoggingIn] = useState(false);
  const [logoutError, setLogoutError] = useState<Error | null>(null);

  const onLogoutClick = async () => {
    setLoggingIn(true);
    try {
      setLogoutError(null);

      // show working explicitly
      await sleep(200);

      await signOut(auth);
    } catch (error) {
      setLogoutError(toError(error));
      setLoggingIn(false);
    }
  };

  return (
    <AppBasicLayout title="Logout">
      <VStack>
        <NiceHeading>Logout</NiceHeading>
        {logoutError && <ErrorBox errors={[logoutError]} />}
        <p>
          <NiceButton onClick={onLogoutClick} disabled={loggingIn}>
            Logout
          </NiceButton>
        </p>
      </VStack>
    </AppBasicLayout>
  );
}
