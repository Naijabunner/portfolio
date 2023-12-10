import { useContext } from "react";
import { navContext } from "../App";
const Side = () => {
  const navigationContext = useContext(navContext)

    const set = false
    return (
    <div className="side_nav" id={navigationContext.navState?"active":undefined}>
        <div className="sideNav_header">
            <p>Okechukwu Daniel</p>
            <i className="fa-solid fa-x" onClick={()=>navigationContext.dispatch(false)}></i>
        </div>
        <ul>
                <li className="sideHover"><a  href="/"><span>#</span>home</a></li>
                <li className="sideHover" ><a href="/projects"><span>#</span>works</a></li>
                <li className="sideHover" ><a href="/about"><span>#</span>About-me</a></li>
                <li className="sideHover" ><a href="/contact"><span>#</span>Contacts</a></li>
            </ul>
            <div className="sidenav_links">
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
    </div>
     );
}
 
export default Side;