import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function ContainerBlock({ children }) {
  return (
    <section className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
