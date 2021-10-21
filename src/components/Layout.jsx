import { Box } from "@material-ui/core";
import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Box height="70px" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progress={1}
        transition={Bounce}
      />

      {children}
    </React.Fragment>
  );
};

export default Layout;
