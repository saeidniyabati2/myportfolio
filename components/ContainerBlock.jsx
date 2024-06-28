import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
