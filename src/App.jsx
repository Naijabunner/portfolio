import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routepages from "./react-router/app_router";
function App() {
  return (
    <>
      <Navbar />
      <Routepages/>
      <Footer />
      <div className="body_links">
        <div className="line_design"></div>
        <a href="wa.link/v1952m">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="mailto:Okechukwudaniel12@gmail.com">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="www.linkedin.com/in/okechukwudaniel">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </>
  );
}

export default App;
