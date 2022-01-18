import { BasicLayout } from "@login-app/ui";

export interface LoadingScreenProps {
  title: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ title }) => {
  return (
    <BasicLayout navPrimary={null} navSecondary={null} title={title}>
      {""}
    </BasicLayout>
  );
};
