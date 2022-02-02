import { sleep, toError } from "@login-app/misc";
import { ErrorBox, NiceButton, TextField, VStack } from "@login-app/ui-react";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { LoginUser } from "../../data/LoginUser";
import { saveProfile } from "../../models/profile/profileDb";

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
      await Promise.all([
        sleep(1000),
        saveProfile({ ...profile, id: loginUser.id }),
      ]);
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
