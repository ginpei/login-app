import { useCurrentUser } from "@login-app/firebase-utils";
import { BasicLayout, NiceButton, NiceHeading, VStack } from "@login-app/ui";
import { EmailAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import { useMemo, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../misc/firebase";
import { homePagePath } from "../home/homePageMeta";
import { loadUserProfile } from "./fn";

const uiConfigBase: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = useCurrentUser();

  const uiConfig: firebaseui.auth.Config = useMemo(() => {
    return {
      ...uiConfigBase,
      callbacks: {
        signInSuccessWithAuthResult() {
          setLoggedIn(true);
          navigate(homePagePath());
          return false;
        },
      },
    };
  }, [navigate]);

  const onLogoutClick = async () => {
    setLoggingIn(true);
    await signOut(auth);
    setLoggingIn(false);
  };

  if (currentUser === undefined || loggedIn) {
    return null;
  }

  return (
    <BasicLayout title="LoginPage">
      <VStack>
        <NiceHeading>LoginPage</NiceHeading>
        <p>
          <Link to={homePagePath()}>Home</Link>
        </p>
        <p>User ID: {currentUser?.uid ?? "(not logged in)"}</p>
        {currentUser ? (
          <p>
            <NiceButton onClick={onLogoutClick} disabled={loggingIn}>
              {loggingIn ? "Logging out..." : "Logout"}
            </NiceButton>{" "}
            <NiceButton
              onClick={() => loadUserProfile(currentUser)}
              disabled={loggingIn}
            >
              Load user profile
            </NiceButton>
          </p>
        ) : (
          <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
        )}
      </VStack>
    </BasicLayout>
  );
};
