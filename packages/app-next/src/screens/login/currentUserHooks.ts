import { Auth, User } from "firebase/auth";
import { useEffect, useState } from "react";

/**
 * @returns `null` if not login. `undefined` if in process.
 */
export function useCurrentUser(auth: Auth): User | null | undefined {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    setUser(undefined);

    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, [auth]);

  return user;
}
