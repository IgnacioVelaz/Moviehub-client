import { useUserQuery } from "../api/getUser";

const UserData = () => {
  const { user, isLoading } = useUserQuery();
  return <div>{isLoading ? <p>Loading...</p> : user?.name}</div>;
};
export default UserData;
