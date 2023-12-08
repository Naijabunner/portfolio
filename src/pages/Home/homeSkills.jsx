import skilldesin from "/src/assets/desigs.png"
const Homeskills = () => {
    return ( <>
    <div className="homeProjects_wrapper">
        <div className="homeProjects_head">
            <div className="homeProjects_head_one">
                <h2><span>#</span>skills </h2>
                <p id="line_design"></p>
            </div>
        </div>
        <div className="skils_home">
            <img src={skilldesin} alt="" />
            <div className="skill_box_wrapper">
                <div className="skill_box_one">
                    <div className="skill_box">
                        <h4>Languages</h4>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className="skill_box_two">
                        <div className="skill_box">
                            <h4>Databases</h4>
                            <p>Mongo</p> 
                        </div>
                        <div className="skill_box">
                            <h4>other</h4>
                            <p>Html Css</p>
                        </div>
                </div>
                <div className="skill_box_three">
                    <div className="skill_box">
                        <h4>Tools</h4>
                        <p>Vscode figma Git GitHub Font-Awesome Sliderjs</p>
                    </div>
                    <div className="skill_box">
                    <h4>Frameworks</h4>
                        <p>Reactjs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Homeskills;