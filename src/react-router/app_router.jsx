import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/home";
const Routepages = () => {
    return (<>
    
    <Router>
        <Routes>
             <Route path="/" element = {<Homepage/>}/>
        </Routes>
       
    </Router>
    </>  );
}
 
export default Routepages;