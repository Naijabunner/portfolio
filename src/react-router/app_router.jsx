import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import Projectcomp from "../pages/Home/Works/projects";
import Aboutcomp from "../pages/Home/Works/About/Contact/aboutme";
import Contactcomp from "../pages/Home/Works/About/Contact/contactme";
const Routepages = () => {
    return (<>
    
    <Router>
        <Routes>
             <Route path="/" element = {<Homepage/>}/>
             <Route path="/projects" element = {<Projectcomp/>}/>
             <Route path="/about" element = {<Aboutcomp/>}/>
             <Route path="/contact" element = {<Contactcomp/>}/>
        </Routes>
       
    </Router>
    </>  );
}
 
export default Routepages;