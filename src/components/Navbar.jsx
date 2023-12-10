const Navbar = (props) => {

    return ( <>
    <nav className="navbarwrapper">
        <div>
        <h1>
            Okechukwu Daniel
        </h1>
        </div>
        <div className="nav_links">
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