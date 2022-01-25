import { ErrorBox } from "@login-app/ui";
import { LoginUser } from "../../data/LoginUser";
import { AppBasicLayout } from "../appBasicLayout/AppBasicLayout";

export interface ErrorScreenProps {
  errors: Error[];
  loginUser: LoginUser | null;
  title: string;
}

export const ErrorScreen: React.VFC<ErrorScreenProps> = ({
  errors,
  loginUser,
  title,
}) => {
  return (
    <AppBasicLayout loginUser={loginUser} title={title}>
      <ErrorBox errors={errors} />
    </AppBasicLayout>
  );
};
