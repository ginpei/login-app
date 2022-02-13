import { LoadingScreen } from "@ginpei/ui-react";
import "@ginpei/ui-react/out/styles.css";
import React from "react";
import { LoginUserScreen } from "./data/LoginUserContext";
import { AppRouter } from "./misc/router";

function App(): JSX.Element {
  const loadingScreen = <LoadingScreen title="" />;

  return (
    <LoginUserScreen loadingScreen={loadingScreen}>
      <AppRouter />
    </LoginUserScreen>
  );
}

export default App;
