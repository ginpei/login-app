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
import { useLiveProfile } from "../models/profile/profileHooks";
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
  const currentUser = useFirebaseAuthCurrentUser(auth);
  const [profile, profileError] = useLiveProfile(currentUser?.uid);
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
    if (currentUser === null) {
      setLoginUser(null);
      return;
    }

    setLoginUser(undefined);

    if (currentUser === undefined || profile === undefined) {
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

  if (currentUser === undefined || loginUser === undefined) {
    return loadingScreen;
  }

  return (
    <loginUserContext.Provider value={loginUser}>
      {children}
    </loginUserContext.Provider>
  );
}

export function useLoginUser(): LoginUser | null {
  return useContext(loginUserContext);
}
