import { Link } from 'react-router-dom';
import { homePagePath } from '../home/homePageMeta';

export interface LoginPageProps {
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <div className="LoginPage">
      LoginPage
      <p>
        <Link to={homePagePath()}>HomePage</Link>
      </p>
    </div>
  );
};
