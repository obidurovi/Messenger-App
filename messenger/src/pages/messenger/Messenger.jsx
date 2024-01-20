import TopBar from "../../components/TopBar/TopBar";
import Activate from "../../components/Activate/Activate";
import useAuthUser from "../../hooks/useAuthUser";

const Messenger = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      {user.accessToken ? <Activate /> : <h1>Main Content</h1>}
    </>
  );
};

export default Messenger;
