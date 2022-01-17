import { BasicLayout, NiceHeading, VStack } from "@login-app/ui";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useMemo } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../../misc/firebase";

const uiConfigBase: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

export interface LoginScreenProps {
  onLogIn?: () => void;
  title: string;
}

export const LoginScreen: React.VFC<LoginScreenProps> = (props) => {
  const uiConfig: firebaseui.auth.Config = useMemo(() => {
    return {
      ...uiConfigBase,
      callbacks: {
        signInSuccessWithAuthResult() {
          props.onLogIn?.();
          return false;
        },
      },
    };
  }, []);

  return (
    <BasicLayout title={props.title}>
      <VStack>
        <NiceHeading>{props.title}</NiceHeading>
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />
      </VStack>
    </BasicLayout>
  );
};
