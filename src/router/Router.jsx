import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import User from "../pages/User/User";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Footer from "../containers/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Router = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          error: {
            style: {
              border: "2px solid black",
              padding: "12px",
              background: "#FF9592",
              color: "#FEFEFE",
            },
          },
          success: {
            style: {
              border: "2px solid black",
              padding: "12px",
              background: "#0BD8B6",
              color: "#FEFEFE",
            },
          },
        }}
      />
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
