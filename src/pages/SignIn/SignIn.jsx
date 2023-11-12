import React from "react";
import Form from "../../components/Form/Form";
import NavigationBar from "../../containers/NavigationBar/NavigationBar";

const SignIn = () => {
  return (
    <>
      <NavigationBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </>
  );
};

export default SignIn;
