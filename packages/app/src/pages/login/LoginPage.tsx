import { sleep, toError } from "@ginpei/app-utils";
import { ErrorBox, NiceButton, NiceHeading, VStack } from "@ginpei/ui-react";
import { EmailAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../data/LoginUserContext";
import { auth } from "../../misc/firebase";
import { AppBasicLayout } from "../../screens/appBasicLayout/AppBasicLayout";
import { LoginScreen } from "../../screens/login/LoginScreen";
import { dashboardPagePath } from "../dashboard/dashboardPageMeta";

const uiConfigBase: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const loginUser = useLoginUser();

  const onLogIn = () => {
    navigate(dashboardPagePath());
  };

  if (loginUser === undefined) {
    return null;
  }

  if (!loginUser) {
    return <LoginScreen onLogIn={onLogIn} title="Login" />;
  }

  return <LogoutScreen />;
};

function LogoutScreen() {
  const loginUser = useLoginUser();
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
    <AppBasicLayout loginUser={loginUser} title="Logout">
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
