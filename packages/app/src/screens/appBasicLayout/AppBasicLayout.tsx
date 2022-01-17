import { BasicLayout } from "@login-app/ui";

export interface AppBasicLayoutProps {
  title: string;
}

export const AppBasicLayout: React.FC<AppBasicLayoutProps> = ({
  children,
  title,
}) => {
  return <BasicLayout title={title}>{children}</BasicLayout>;
};
