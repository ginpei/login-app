import { useFirebaseAuthCurrentUser } from "@login-app/firebase-utils";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
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

export function LoginUserScreen({
  children,
  loadingScreen,
}: LoginUserContextProps): ReactElement {
  const currentUser = useFirebaseAuthCurrentUser(auth);
  const [profile, profileError] = useLiveProfile(currentUser?.uid);

  // TODO display error
  useEffect(() => {
    if (profileError) {
      logError(profileError);
    }
  }, [profileError]);

  const loginUser = useMemo(() => {
    // no login
    if (currentUser === null) {
      return null;
    }

    // loading
    if (currentUser === undefined || profile === undefined) {
      return undefined;
    }

    const newLoginUser: LoginUser = {
      id: currentUser.uid,
      profile:
        profile ??
        createProfile({
          id: currentUser.uid,
          name: currentUser.displayName ?? "",
        }),
    };
    return newLoginUser;
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
