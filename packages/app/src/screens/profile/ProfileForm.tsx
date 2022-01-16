import { NiceButton, TextField, VStack } from "@login-app/ui";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setProfile(currentProfile);
  }, [currentProfile]);

  if (!profile) {
    return <>…</>;
  }

  return (
    <form className="ProfileForm">
      <VStack>
        <p>User ID: {userId}</p>
        <TextField label="Display name" />
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

    // TODO fetch from Firestore
    setProfile({ name: "" });
  }, [userId]);

  return [profile, null];
}
