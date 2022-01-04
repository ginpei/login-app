import { User } from "firebase/auth";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from "react";

const currentUserContext = createContext<User | null>(null);

export interface CurrentUserContextProps {
  children: ReactNode;
  currentUser: User | null;
}

export function CurrentUserScreen({
  children,
  currentUser,
}: CurrentUserContextProps): ReactElement {
  return (
    <currentUserContext.Provider value={currentUser}>
      {children}
    </currentUserContext.Provider>
  );
}

export function useCurrentUser(): User | null {
  return useContext(currentUserContext);
}
