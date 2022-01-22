import { useFirebaseAuthCurrentUser } from "@login-app/firebase-utils";
import { User } from "firebase/auth";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../misc/firebase";
import { logError } from "../misc/log";
import { useProfile } from "../models/profile/profileHooks";
import { LoginUser } from "./LoginUser";
import { createProfile } from "./Profile";

const loginUserContext = createContext<LoginUser | null>(null);

export interface LoginUserContextProps {
  children: ReactNode;
  loadingScreen: JSX.Element;
}

interface InnerLoginUserContextProps extends LoginUserContextProps {
  currentUser: User | null;
}

export function LoginUserScreen({
  children,
  loadingScreen,
}: LoginUserContextProps): ReactElement {
  // this component handles only login user on Firebase auth

  const currentUser = useFirebaseAuthCurrentUser(auth);

  if (currentUser === undefined) {
    return loadingScreen;
  }

  return (
    <InnerLoginUserScreen
      currentUser={currentUser}
      loadingScreen={loadingScreen}
    >
      {children}
    </InnerLoginUserScreen>
  );
}

export function useLoginUser(): LoginUser | null {
  return useContext(loginUserContext);
}

function InnerLoginUserScreen({
  children,
  currentUser,
  loadingScreen,
}: InnerLoginUserContextProps): ReactElement {
  // this component handles login user on app following the given Firebase login

  const [profile, profileError] = useProfile(currentUser?.uid);
  const [loginUser, setLoginUser] = useState<LoginUser | null | undefined>(
    undefined
  );

  // TODO display error
  useEffect(() => {
    if (profileError) {
      logError(profileError);
    }
  }, [profileError]);

  useEffect(() => {
    setLoginUser(undefined);
    if (!currentUser || profile === undefined) {
      return;
    }

    setLoginUser({
      id: currentUser.uid,
      profile:
        profile ??
        createProfile({
          id: currentUser.uid,
          name: currentUser.displayName ?? "",
        }),
    });
  }, [currentUser, profile]);

  if (loginUser === undefined) {
    return loadingScreen;
  }

  return (
    <loginUserContext.Provider value={loginUser}>
      {children}
    </loginUserContext.Provider>
  );
}
