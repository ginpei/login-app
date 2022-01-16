import { NiceButton, TextField, VStack } from "@login-app/ui";
import { collection, doc, getDoc } from "firebase/firestore";
import { ChangeEventHandler, useEffect, useState } from "react";
import { db } from "../../misc/firebase";

export interface ProfileFormProps {
  userId: string;
}

// TODO move to data folder
export interface Profile {
  name: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ userId }) => {
  const [currentProfile, profileError] = useProfile(userId);
  const [profile, setProfile] = useState<Profile | undefined>(currentProfile);

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "name") {
      setProfile({ ...profile, name: value });
    } else {
      throw new Error(`Unknown field name: ${name}`);
    }
  };

  useEffect(() => {
    setProfile(currentProfile);
  }, [currentProfile]);

  if (!profile) {
    return <>…</>;
  }

  if (profileError) {
    return (
      <VStack>
        <h2>Error</h2>
        <div>{profileError.message}</div>
      </VStack>
    );
  }

  return (
    <form className="ProfileForm">
      <VStack>
        <p>User ID: {userId}</p>
        <TextField
          label="Display name"
          name="name"
          onChange={onValueChange}
          value={profile.name}
        />
        <NiceButton>Save</NiceButton>
      </VStack>
    </form>
  );
};

function useProfile(userId: string): [Profile | undefined, Error | null] {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setProfile(undefined);

    const refColl = collection(db, "profiles");
    const refDoc = doc(refColl, userId);
    getDoc(refDoc)
      .then((ssDoc) => {
        const data = ssDoc.data();
        if (!data) {
          setProfile({ name: "" });
          return;
        }
        const newProfile: Profile = {
          name: String(data.name),
        };
        setProfile(newProfile);
      })
      .catch((newError) => setError(newError));
  }, [userId]);

  return [profile, error];
}
