import React from "react";
import NavigationBar from "../../containers/NavigationBar/NavigationBar";
import Footer from "../../containers/Footer/Footer";
import Form from "../../components/Form/Form";

const SignIn = () => {
  return (
    <div className="body">
      <NavigationBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
