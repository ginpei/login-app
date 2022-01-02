import Head from "next/head";
import Link from "next/link";
import { BasicLayout, NiceHeading, VStack } from "@login-app/ui";
import { loginPagePath } from "../login/loginPageMeta";

export const HomePage: React.FC = (props) => {
  return (
    <BasicLayout title="HomePage">
      <VStack>
        <NiceHeading>HomePage</NiceHeading>
        <p>
          <Link href={loginPagePath()}>Login</Link>
        </p>
      </VStack>
    </BasicLayout>
  );
};
