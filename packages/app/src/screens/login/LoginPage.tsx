import { BasicLayout } from '@login-app/ui';
import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from "../../middleware/firebase";
import { homePagePath } from '../home/homePageMeta';

export interface LoginPageProps {
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      console.log('user', user);
      if (user) {
        console.log('user logged in');
      } else {
        console.log('user logged out');
      }
    });
  }, []);

  const onLoginClick = async () => {
    const email = 'test@example.com';
    const password = '123456';
    setLoggingIn(true);
    await signInWithEmailAndPassword(auth, email, password);
    setLoggingIn(false);
  };

  const onLogoutClick = async () => {
    setLoggingIn(true);
    await signOut(auth);
    setLoggingIn(false);
  };

  return (
    <BasicLayout title="LoginPage">
      <h1 className='text-3xl font-bold'>LoginPage</h1>
      <p>
        <Link href={homePagePath()}>Home</Link>
      </p>
      <p>
        User ID: {currentUser?.uid ?? '(not logged in)'}
      </p>
      {currentUser ? (
        <p>
          <button onClick={onLogoutClick} disabled={loggingIn}>
            [{loggingIn ? 'Logging out...' : 'Logout'}]
          </button>
        </p>
      ) : (
        <p>
          <button onClick={onLoginClick} disabled={loggingIn}>
            [{loggingIn ? 'Logging in...' : 'Login'}]
          </button>
        </p>
      )}
    </BasicLayout>
  );
};
