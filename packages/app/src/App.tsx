import React from "react";
import "@login-app/ui/out/styles.css";
import { CurrentUserScreen } from "@login-app/firebase-utils";
import { AppRouter } from "./misc/router";
import { auth } from "./misc/firebase";

function App(): JSX.Element {
  return (
    <CurrentUserScreen auth={auth}>
      <AppRouter />
    </CurrentUserScreen>
  );
}

export default App;
