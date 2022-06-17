import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Features from "../Body/Features";

const Layout = () => {
  return (
    <div className="Layout">
        <Header/>
        <Features/>
        <Footer/>
    </div>
  );
};

export default Layout;
