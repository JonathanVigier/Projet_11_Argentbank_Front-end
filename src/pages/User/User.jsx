import React, { useCallback, useEffect } from "react";
import { fetchUserData } from "../../redux/Slicers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../../containers/NavigationBar/NavigationBar";
import UserInfos from "../../components/UserInfos/UserInfos";
import Accounts from "../../containers/Accounts/Accounts";
import Loader from "../../components/Loader/Loader";

const User = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const { token } = useSelector((state) => state.auth);

  const fetchData = useCallback(() => {
    dispatch(fetchUserData(token));
  }, [dispatch, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavigationBar />
      <main className="main bg-dark">
        <UserInfos />
        <Accounts />
      </main>
    </>
  );
};

export default User;
