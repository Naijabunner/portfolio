import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
const Routepages = () => {
    return (<>
    
    <Router>
        <Routes>
             <Route path="/" element = {<Home/>}/>
        </Routes>
       
    </Router>
    </>  );
}
 
export default Routepages;