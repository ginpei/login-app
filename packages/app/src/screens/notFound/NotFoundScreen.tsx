import { NiceHeading } from "@ginpei/ui-react";
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
