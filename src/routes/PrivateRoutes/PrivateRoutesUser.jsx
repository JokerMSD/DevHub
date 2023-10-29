import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserStateContext";
import { Loading } from "../../components/Loading";

export const PrivateRoutesUser = () => {
  const { user } = useContext(UserContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout;

    if (user === null || (Array.isArray(user) && user.length === 1)) {
      timeout = setTimeout(() => {
        setShouldRedirect(true);
        setIsLoading(false);
      }, 2000);
    } else {
      setIsLoading(false);
    }

    return () => clearTimeout(timeout);
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  if (shouldRedirect) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};
