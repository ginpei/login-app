import { Link } from 'react-router-dom';
import { loginPagePath } from '../login/loginPageMeta';

export interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div className="HomePage">
      HomePage
      <p>
        <Link to={loginPagePath()}>Login</Link>
      </p>
    </div>
  );
};
