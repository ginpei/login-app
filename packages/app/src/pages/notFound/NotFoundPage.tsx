import { useLoginUser } from "../../data/LoginUserContext";
import { NotFoundScreen } from "../../screens/notFound/NotFoundScreen";

export const NotFoundPage: React.VFC = () => {
  const loginUser = useLoginUser();

  return <NotFoundScreen loginUser={loginUser} />;
};
