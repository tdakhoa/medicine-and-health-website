import React from "react";
import { Footer, NavBar } from "../components";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
