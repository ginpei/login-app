import { BasicLayout } from "@login-app/ui";
import { Link } from "react-router-dom";
import { LoginUser } from "../../data/LoginUser";
import { dashboardPagePath } from "../../pages/dashboard/dashboardPageMeta";
import { homePagePath } from "../../pages/home/homePageMeta";
import { loginPagePath } from "../../pages/login/loginPageMeta";
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
          <Link className="AppBasicLayout-NavBar-link" to={dashboardPagePath()}>
            {loginUser.profile.name || "(No name)"}
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
