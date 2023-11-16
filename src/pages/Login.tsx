import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button onClick={(): Promise<void> => loginWithRedirect()}>LOGIN</button>
    </>
  );
};
export default Login;
