import { BasicLayout } from "@login-app/ui";
import { Link } from "react-router-dom";
import { LoginUser } from "../../data/LoginUser";
import { homePagePath } from "../../pages/home/homePageMeta";
import { loginPagePath } from "../../pages/login/loginPageMeta";
import { ProfilePagePath } from "../../pages/profile/profilePageMeta";
import "./AppBasicLayout.css";

export interface AppBasicLayoutProps {
  loginUser: LoginUser | null;
  title: string;
}

export const AppBasicLayout: React.FC<AppBasicLayoutProps> = ({
  children,
  loginUser,
  title,
}) => {
  return (
    <BasicLayout
      navPrimary={
        <Link className="AppBasicLayout-NavBar-link" to={homePagePath()}>
          Login App
        </Link>
      }
      navSecondary={
        loginUser ? (
          <Link className="AppBasicLayout-NavBar-link" to={ProfilePagePath()}>
            Profile
          </Link>
        ) : (
          <Link className="AppBasicLayout-NavBar-link" to={loginPagePath()}>
            Login
          </Link>
        )
      }
      title={title}
    >
      {children}
    </BasicLayout>
  );
};
