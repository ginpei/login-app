import { Link } from 'react-router-dom';
import { loginPagePath } from '../login/loginPageMeta';
import { BasicLayout, NiceHeading, VStack } from '@login-app/ui';

export interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <BasicLayout title='Home'>
      <VStack>
        <NiceHeading>Home</NiceHeading>
        <p>
          <Link to={loginPagePath()}>Login</Link>
        </p>
      </VStack>
    </BasicLayout>
  );
};
