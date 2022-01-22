import { sleep, toError } from "@login-app/misc";
import { ErrorBox, NiceButton, TextField, VStack } from "@login-app/ui";
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { LoginUser } from "../../data/LoginUser";
import { createProfile, Profile } from "../../data/Profile";
import { db } from "../../misc/firebase";

export interface ProfileFormProps {
  loginUser: LoginUser;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ loginUser }) => {
  const [profile, setProfile] = useState(loginUser.profile);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<Error | null>(null);

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    setSaving(true);
    try {
      await Promise.all([sleep(1000), saveProfile(loginUser.id, profile)]);
    } catch (error) {
      setSaveError(toError(error));
    } finally {
      setSaving(false);
    }
  };

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "name") {
      setProfile({ ...profile, name: value });
    } else {
      throw new Error(`Unknown field name: ${name}`);
    }
  };

  useEffect(() => {
    setProfile(loginUser.profile);
  }, [loginUser]);

  return (
    <form className="ProfileForm" onSubmit={onSubmit}>
      <fieldset disabled={saving}>
        <VStack>
          {saveError && <ErrorBox errors={[saveError]} />}
          <p>User ID: {loginUser.id}</p>
          <TextField
            label="Display name"
            name="name"
            onChange={onValueChange}
            value={profile.name}
          />
          <NiceButton primary>Save</NiceButton>
        </VStack>
      </fieldset>
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
          setProfile(createProfile());
          return;
        }
        const newProfile: Profile = {
          id: String(data.id),
          name: String(data.name),
        };
        setProfile(newProfile);
      })
      .catch((newError) => setError(newError));
  }, [userId]);

  return [profile, error];
}

async function saveProfile(userId: string, profile: Profile): Promise<void> {
  const refColl = collection(db, "profiles");
  const refDoc = doc(refColl, userId);

  const data = {
    ...profile,
    updatedAt: serverTimestamp(),
  };

  await setDoc(refDoc, data);
}
