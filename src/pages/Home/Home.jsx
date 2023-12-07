import Hero from "./hero";
import HomeProjects from "./homeprojects";
import Quote from "./quote";

const Home = () => {
    return ( <div className="Home">
        <Hero/>
        <Quote/>
        <HomeProjects/>
    </div> );
}
 
export default Home;