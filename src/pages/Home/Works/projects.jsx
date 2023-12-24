import Navbar from "../../../components/Navbar";
import UseProjectData from "../../../Data/projectData";

const Projectcomp = () => {
  const data = UseProjectData();
  const mappedProjects = data.map((project) => {
    return (
      <div className="d">
        <div className="project_img">
          <img src={project.img} alt="" />
        </div>
        <div className="project_tools">
            <p>{project.tools}</p>
        </div>
        <div className="project_innerWrapper">
            <h3 className="project_name">{project.project_name}</h3>
          <p>{project.notes}</p>
          <div className="btns_wrapper">
            
            <button className="github_btn"><a href={project.github}target="_blank">GitHub {"<~~>"}</a> </button>
            <button className="live_btn"><a href={project.live}target="_blank">Live {"<~~>"}</a> </button>
          </div>
        </div>
      </div>
    );
  });
    return ( <>
    <Navbar currentPage = "project"/>
    <div className="wrapper">
        <div className="header">
            <h2> <span>/</span>projects</h2>
            <p>list of my projects</p>
        </div>
        <div className="dd">
           {mappedProjects}
        </div>

    </div>
    </> );
}
 
export default Projectcomp;