import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
