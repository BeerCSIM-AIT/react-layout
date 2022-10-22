import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function MainLayout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="container pt-5">
            <div className="row navpadding pt-5">
                {children}
            </div>
        </div>
        <Footer/>
    </div>
  );
}


export default MainLayout;