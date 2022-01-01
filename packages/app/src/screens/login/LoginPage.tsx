import { EmailAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { rootPath } from "../../../util/paths";
import { auth } from "../../middleware/firebase";
import { BasicLayout, NiceButton, NiceHeading, VStack } from "../../ui";
import { homePagePath } from "../home/homePageMeta";
import { useCurrentUser } from "./currentUserHooks";

const uiConfigBase: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

export const LoginPage: React.FC = () => {
  const router = useRouter();
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = useCurrentUser(auth);

  const uiConfig: firebaseui.auth.Config = useMemo(() => {
    return {
      ...uiConfigBase,
      callbacks: {
        signInSuccessWithAuthResult() {
          setLoggedIn(true);
          router.push(rootPath());
          return false;
        },
      },
    };
  }, []);

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
          <Link href={homePagePath()}>Home</Link>
        </p>
        <p>User ID: {currentUser?.uid ?? "(not logged in)"}</p>
        {currentUser ? (
          <p>
            <NiceButton onClick={onLogoutClick} disabled={loggingIn}>
              {loggingIn ? "Logging out..." : "Logout"}
            </NiceButton>
          </p>
        ) : (
          <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
        )}
      </VStack>
    </BasicLayout>
  );
};
