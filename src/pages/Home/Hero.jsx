import Burna from "/src/assets/burna_img.png";
import Dots from "/src/assets/Dots.png";
const Hero = () => {
    return ( <>
    <section className="herowrapper">
        <div className="herotext">
            <h2>Okechukwu Daniel is a <span>Front End Web App Developer</span> </h2>
            <p>Transforming Frontend Flourishes into Backend Brilliance: Fulfilling Digital Aspirations through the Art of Full Stack Wizardry.</p>
            <button>Contact Me!!</button>
        </div>
        <div className="herp_img_wrapper">
            <img src={Burna} alt="Daniel" className="profilepic" />
            <div className="text">
                <p></p>
                <p></p>
            </div>
            <img src={Dots} alt="Dots" className="dots1"/>
            <img src={Dots} alt="Dots" className="dots2"/>
        </div>
    </section>
    </> );
}
 
export default Hero;