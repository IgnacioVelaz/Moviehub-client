import { IoMdLogOut } from "react-icons/io";
import { useUserQuery } from "../api/getUser";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "./LoadingSpinner";

const UserData = () => {
  const { logout } = useAuth0();

  const { user, isLoading } = useUserQuery();
  return (
    <div className="flex  items-center gap-2 ml-12">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        user && (
          <>
            <img
              src={user.picture}
              alt="Avatar"
              className="w-10 rounded-full"
            />
            <button onClick={() => logout()}>
              <IoMdLogOut className="w-6 h-6 hover:text-secondary" />
            </button>
          </>
        )
      )}
    </div>
  );
};
export default UserData;
