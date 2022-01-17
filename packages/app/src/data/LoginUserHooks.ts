import { useCurrentUser } from "@login-app/firebase-utils/out";
import { LoginUser } from "./LoginUser";

export function useLoginUser(): LoginUser | null {
  const loginFirebaseUser = useCurrentUser();

  if (!loginFirebaseUser) {
    return null;
  }

  return {
    id: loginFirebaseUser.uid,
    profile: {
      name: loginFirebaseUser.displayName || "",
    },
  };
}
