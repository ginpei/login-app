import {
  CurrentUserScreen,
  useFirebaseAuthCurrentUser,
} from "@login-app/firebase-utils";
import "@login-app/ui/out/styles.css";
import React from "react";
import { auth } from "./misc/firebase";
import { AppRouter } from "./misc/router";
import { LoadingScreen } from "./screens/loading/LoadingScreen";

function App(): JSX.Element {
  const currentUser = useFirebaseAuthCurrentUser(auth);

  if (currentUser === undefined) {
    return <LoadingScreen title="" />;
  }

  return (
    <CurrentUserScreen currentUser={currentUser}>
      <AppRouter />
    </CurrentUserScreen>
  );
}

export default App;
