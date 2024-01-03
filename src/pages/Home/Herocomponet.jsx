import Imghero from "/src/assets/Myimg01.jpeg"
import Resume from "/src/assets/OkechukwuDanielResume.pdf"
import Dots from "/src/assets/Dots.png";
import { useTypingEffect } from "../../Hooks/Typing";
import LazyLoad from 'react-lazy-load';
const Hero = () => {
    const textOne = useTypingEffect("Front End Web App Developer", 50);
    const textTwo = useTypingEffect("Transforming Frontend Flourishes into Backend Brilliance: Fulfilling Digital Aspirations through the Art of Full Stack Wizardry.", 50);
    const textThree = useTypingEffect("Front End Web App Developer", 50);

           
    return ( <>
    <section className="herowrapper">
        <div className="herotext">
            <h2>Okechukwu Daniel is a <span className="hero_span">{textOne}</span> </h2>
            <p>{textTwo}</p>
            <a href={Resume} download ><button className="cv_download"> Download CV</button></a>
            
        </div>
        <div className="herp_img_wrapper">
            
            <img src={Imghero} alt="Daniel" className="profilepic" loading="lazy" />
            <div className="text">
                <p className="purple_box"></p>
                <p>Currently working on my <span>portfolio</span></p>
            </div>
            <img src={Dots} alt="Dots" className="dots1"/>
            <img src={Dots} alt="Dots" className="dots2"/>
        </div>
        
    </section>
    </> );
}
 
export default Hero;