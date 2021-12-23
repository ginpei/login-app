import { BasicLayout } from "@login-app/ui";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { rootPath } from "../../../util/paths";
import { auth } from "../../middleware/firebase";
import { homePagePath } from "../home/homePageMeta";

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
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

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

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
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
      <h1 className="text-3xl font-bold">LoginPage</h1>
      <p>
        <Link href={homePagePath()}>Home</Link>
      </p>
      <p>User ID: {currentUser?.uid ?? "(not logged in)"}</p>
      {currentUser ? (
        <p>
          <button onClick={onLogoutClick} disabled={loggingIn}>
            [{loggingIn ? "Logging out..." : "Logout"}]
          </button>
        </p>
      ) : (
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
      )}
    </BasicLayout>
  );
};
