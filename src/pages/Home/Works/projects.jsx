import Navbar from "../../../components/Navbar";

const Projectcomp = () => {
    return ( <>
    <Navbar currentPage = "project"/>
    <div className="wrapper">
        <div className="header">
            <h2> <span>/</span>projects</h2>
            <p>list of my projects</p>
        </div>
    </div>
    </> );
}
 
export default Projectcomp;