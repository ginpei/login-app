import {
  CurrentUserScreen,
  useFirebaseAuthCurrentUser,
} from "@login-app/firebase-utils";
import "@login-app/ui/out/styles.css";
import React from "react";
import { auth } from "./misc/firebase";
import { AppRouter } from "./misc/router";

function App(): JSX.Element {
  const currentUser = useFirebaseAuthCurrentUser(auth);

  if (currentUser === undefined) {
    return <div>…</div>;
  }

  return (
    <CurrentUserScreen currentUser={currentUser}>
      <AppRouter />
    </CurrentUserScreen>
  );
}

export default App;
