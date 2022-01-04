import { Auth, User } from "firebase/auth";
import React, { createContext, ReactElement, ReactNode } from "react";
import { useCurrentUser } from "./currentUserHooks";

const currentUserContext = createContext<User | null>(null);

export interface CurrentUserContextProps {
  auth: Auth;
  children: ReactNode;
  LoadingScreen?: ReactElement;
}

export function CurrentUserScreen({
  auth,
  children,
  LoadingScreen,
}: CurrentUserContextProps): null | ReactElement {
  const currentUser = useCurrentUser(auth);

  if (currentUser === undefined) {
    return LoadingScreen ?? null;
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      {children}
    </currentUserContext.Provider>
  );
}
