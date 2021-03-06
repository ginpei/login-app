import { getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Profile } from "../../data/Profile";
import { getProfileDoc, ssToProfile } from "./profileDb";

export function useProfile(
  userId: string | undefined
): [Profile | null | undefined, Error | null] {
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setProfile(undefined);
    setError(null);

    if (!userId) {
      return;
    }

    const doc = getProfileDoc(userId);
    getDoc(doc)
      .then((ss) => {
        if (!ss.exists()) {
          setProfile(null);
          return;
        }

        const newProfile = ss.data();
        setProfile(newProfile);
      })
      .catch((newError) => {
        setProfile(null);
        setError(newError);
      });
  }, [userId]);

  return [profile, error];
}

export function useLiveProfile(
  userId: string | undefined
): [Profile | null | undefined, Error | null] {
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setProfile(undefined);
    setError(null);

    if (!userId) {
      return;
    }

    const doc = getProfileDoc(userId);
    onSnapshot(doc, {
      next(ss) {
        setProfile(ssToProfile(ss));
      },
      error(newError) {
        setProfile(null);
        setError(newError);
      },
    });
  }, [userId]);

  return [profile, error];
}
