import { BasicLayout } from "@login-app/ui";
import { Link } from "react-router-dom";
import { homePagePath } from "../../pages/home/homePageMeta";
import "./AppBasicLayout.css";

export interface AppBasicLayoutProps {
  title: string;
}

export const AppBasicLayout: React.FC<AppBasicLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <BasicLayout
      navPrimary={
        <Link className="AppBasicLayout-NavBar-link" to={homePagePath()}>
          Login App
        </Link>
      }
      navSecondary={null}
      title={title}
    >
      {children}
    </BasicLayout>
  );
};
