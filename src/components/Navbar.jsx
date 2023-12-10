import { useContext } from "react";
import navBtn from "/src/assets/nav.png"
import { navContext } from "../App";
const Navbar = (props) => {
    const navigationContext = useContext(navContext)
    console.log(navigationContext)
    return ( <>
    <nav className="navbarwrapper">
        <div>
        <h1>
            Okechukwu Daniel
        </h1>
        </div>
        <div className="nav_links">
                <img src={navBtn} alt="" onClick={()=>navigationContext.dispatch(true)}/>
            <ul>
                <li ><a href="/"className="forHover" id={props.currentPage=== "home"? "active": undefined}><span>#</span>home</a></li>
                <li ><a className="forHover" id={props.currentPage=== "project"? "active": undefined} href="/projects"><span>#</span>works</a></li>
                <li ><a className="forHover" id={props.currentPage=== "about"? "active": undefined} href="/about"><span>#</span>About-me</a></li>
                <li ><a className="forHover" id={props.currentPage=== "contact"? "active": undefined} href="/contact"><span>#</span>Contacts</a></li>
            </ul>
        </div>
    </nav>
    
    </> );
}
 
export default Navbar;