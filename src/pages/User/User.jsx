import React, { useEffect } from "react";
import { fetchUserData } from "../../redux/Slicers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "../../containers/NavigationBar/NavigationBar";
import Footer from "../../containers/Footer/Footer";
import UserInfos from "../../components/UserInfos/UserInfos";
import Accounts from "../../containers/Accounts/Accounts";
import Loader from "../../components/Loader/Loader";

const User = () => {
  const dispatch = useDispatch();
  const { loading, token, isLoginSuccess } = useSelector((state) => state.auth);

  console.log(`le token est: ${token}`);
  console.log(`l'utilisateur est il connecté ?: ${isLoginSuccess}`);

  function isUserLogged() {
    if (isLoginSuccess) {
      dispatch(fetchUserData(token));
    }
  }

  useEffect(() => {
    isUserLogged();
  }, [isLoginSuccess]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="body">
      <NavigationBar />
      <main className="main bg-dark">
        <UserInfos />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
};

export default User;
