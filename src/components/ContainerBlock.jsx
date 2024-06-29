import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Hanken_Grotesk } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export default function ContainerBlock({ children }) {
  return (
    <Fragment>
      <Navbar className={hankenGrotesk.className} />
      <div className={hankenGrotesk.className}>{children}</div>
      <Footer />
    </Fragment>
  );
}
