import { BasicLayout } from "@login-app/ui";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../middleware/firebase";
import { homePagePath } from "../home/homePageMeta";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
  const [loginError, setLoginError] = useState<Error | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("user", user);
      if (user) {
        console.log("user logged in");
      } else {
        console.log("user logged out");
      }
    });
  }, []);

  const onLoginClick = async () => {
    const email = "test@example.com";
    const password = "123456";
    try {
      setLoginError(null);
      setLoggingIn(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (errorLike) {
      const error =
        errorLike instanceof Error ? errorLike : new Error(String(errorLike));
      setLoginError(error);
    } finally {
      setLoggingIn(false);
    }
  };

  const onLogoutClick = async () => {
    setLoggingIn(true);
    await signOut(auth);
    setLoggingIn(false);
  };

  const onCreateClick = async () => {
    const email = "test@example.com";
    const password = "123456";
    try {
      setLoginError(null);
      setLoggingIn(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (errorLike) {
      const error =
        errorLike instanceof Error ? errorLike : new Error(String(errorLike));
      setLoginError(error);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <BasicLayout title="LoginPage">
      <h1 className="text-3xl font-bold">LoginPage</h1>
      <p>
        <Link href={homePagePath()}>Home</Link>
      </p>
      <p>User ID: {currentUser?.uid ?? "(not logged in)"}</p>
      {loginError && <p className="text-red-600">{loginError.message}</p>}
      {currentUser ? (
        <p>
          <button onClick={onLogoutClick} disabled={loggingIn}>
            [{loggingIn ? "Logging out..." : "Logout"}]
          </button>
        </p>
      ) : (
        <p>
          <button onClick={onLoginClick} disabled={loggingIn}>
            [{loggingIn ? "Logging in..." : "Login"}]
          </button>
          <button onClick={onCreateClick} disabled={loggingIn}>
            [{loggingIn ? "Logging in..." : "Create"}]
          </button>
        </p>
      )}
    </BasicLayout>
  );
};
