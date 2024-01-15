import TopBar from "../../components/TopBar/TopBar";
import useAuthUser from "../../hooks/useAuthUser";

const ActivationAfterLogin = () => {
  const { user } = useAuthUser();

  return (
    <>
      <TopBar />
      <h1> ActivationAfterLogin </h1>
    </>
  );
};

export default ActivationAfterLogin;
