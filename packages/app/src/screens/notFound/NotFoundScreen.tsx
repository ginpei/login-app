import { NiceHeading } from "@login-app/ui";
import { LoginUser } from "../../data/LoginUser";
import { AppBasicLayout } from "../appBasicLayout/AppBasicLayout";

export interface NotFoundScreenProps {
  loginUser: LoginUser | null;
}

export const NotFoundScreen: React.VFC<NotFoundScreenProps> = ({
  loginUser,
}) => {
  return (
    <AppBasicLayout loginUser={loginUser} title="Not found">
      <NiceHeading>Not found</NiceHeading>
    </AppBasicLayout>
  );
};
