import Hero from "./hero";
import Homeskills from "./homeSkills";
import Homeabout from "./homeabout";
import Homecontact from "./homecontact";
import HomeProjects from "./homeprojects";
import Quote from "./quote";

const Home = () => {
    return ( <div className="Home">
        <Hero/>
        <Quote/>
        <HomeProjects/>
        <Homeskills/>
        <Homeabout/>
        <Homecontact/>
    </div> );
}
 
export default Home;