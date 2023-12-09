import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
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