import TopBar from "../../components/TopBar/TopBar";
import Activate from "../../components/Activate/Activate";
import useAuthUser from "../../hooks/useAuthUser";
import MessengerMain from "../../components/MessengerMain/MessengerMain";

const Messenger = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      {user.accessToken ? <Activate /> : <MessengerMain />}
    </>
  );
};

export default Messenger;
