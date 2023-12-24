import UseProjectData from "../../Data/projectData";
const HomeProjects = () => {
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

  return (
    <>
      <div className="homeProjects_wrapper">
        <div className="homeProjects_head">
          <div className="homeProjects_head_one">
            <h2>
              <span>#</span>projects{" "}
            </h2>
            <p id="line_design"></p>
          </div>
          <div className="homeProjects_head_two">
            <a href="/projects"><p>View all {"~~>"}</p></a>
          </div>
        </div>
        <div className="dd">{mappedProjects}</div>
      </div>
    </>
  );
};

export default HomeProjects;
