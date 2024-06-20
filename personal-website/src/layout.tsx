import { LayoutProps } from "../.next/types/app/layout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Children is a special prop that allows you to pass components as data to other components.

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  );
}

export default Layout;