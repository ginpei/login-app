import { Link } from 'react-router-dom';
import { homePagePath } from '../home/homePageMeta';
import { BasicLayout, NiceHeading, VStack } from '@login-app/ui';

export interface LoginPageProps {
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <BasicLayout title="Login">
      <VStack>
        <NiceHeading>Login</NiceHeading>
        <p>
          <Link to={homePagePath()}>Home</Link>
        </p>
      </VStack>
    </BasicLayout>
  );
};
