const Navbar = () => {
    return ( <>
    <nav className="navbarwrapper">
        <div>
        <h1>
            Okechukwu Daniel
        </h1>
        </div>
        <div className="nav_links">
            <ul>
                <li><a href="/"><span>#</span>home</a></li>
                <li><a href="/projects"><span>#</span>works</a></li>
                <li><a href="/about"><span>#</span>About-me</a></li>
                <li><a href="/contact"><span>#</span>Contacts</a></li>
            </ul>
        </div>
    </nav>
    
    </> );
}
 
export default Navbar;