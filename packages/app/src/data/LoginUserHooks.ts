import { useCurrentUser } from "@login-app/firebase-utils/out";
import { LoginUser } from "./LoginUser";
import { createProfile } from "./Profile";

export function useLoginUser(): LoginUser | null {
  const loginFirebaseUser = useCurrentUser();

  if (!loginFirebaseUser) {
    return null;
  }

  return {
    id: loginFirebaseUser.uid,
    profile: createProfile({
      id: loginFirebaseUser.uid,
      name: loginFirebaseUser.displayName ?? "",
    }),
  };
}
